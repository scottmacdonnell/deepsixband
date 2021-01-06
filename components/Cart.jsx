import React, { useState } from 'react'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { useShoppingCart } from 'use-shopping-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Cart.module.scss'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart() {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementItem,
    decrementItem
  } = useShoppingCart()

  if (Object.keys(cartDetails).length === 0) {
    return (
      <div className={styles.Cart}>
        <div className="Content">
          <div className={styles.CartContent}>
            <h1>No items in cart</h1>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.Cart}>
        
        <div className="Content">

          <div className={styles.CartContent}>

            <h1>Review Order</h1>

            {Object.keys(cartDetails).map((item) => {
              const cartItem = cartDetails[item]
              const { name, description, id, quantity, price, image } = cartItem
              return (
                <div className={styles.CartContentItem}>
                  <div className={styles.CartContentItemImage}>
                    <Image 
                      src={image}
                      alt="Product Image"
                      layout="fill"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className={styles.CartContentItemMeta}>
                    <div className={styles.CartContentItemMetaName}>
                      <p><b>{name}</b></p>
                    </div>
                    <div className={styles.CartContentItemMetaDescription}>
                      <p>{description}</p>
                    </div>
                    <div className={styles.CartContentItemMetaPrice}>
                      <p><b>${(price/100).toFixed(2)}</b></p>
                    </div>
                    <div className={styles.CartContentItemMetaFunctions}>
                      <button onClick={() => incrementItem(id)}>
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </button>
                      <p>{quantity}</p>
                      <button onClick={() => decrementItem(id)}>
                        <FontAwesomeIcon icon={["fas", "minus"]} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

          <div className={styles.CartContentOverview}>
            <div className={styles.CartContentOverviewMeta}>
              <p>Product Quantity: <b>{cartCount}</b></p>
              <p>Total Price: <b>${(totalPrice/100).toFixed(2)}</b></p>
            </div>
            <CheckoutButton />
          </div>
        </div>
      </div>
    )
  }
}

function CheckoutButton() {
  const [buttonStateReady, setButtonStateReady] = useState(true)
  const [buttonStateActive, setButtonStateActive] = useState(false)

  const {
    cartDetails
  } = useShoppingCart()

  const handleCheckout = async () => {
    setButtonStateActive(true)
    setButtonStateReady(false)
    const stripe = await stripePromise;

    let lineItems = []
    for (const itemId in cartDetails) {
      if (cartDetails[itemId].price_id) {
        lineItems.push({ price: cartDetails[itemId].price_id, quantity: cartDetails[itemId].quantity })
      }
    }

    const cart = {
      line_items: lineItems
    }

    console.log(cart)

    const res = await fetch(`/api/stripe/checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(cart)
    })

    const session = await res.json()

    const result = await stripe.redirectToCheckout({
      sessionId: session.session.id,
    })
  }

  return (
    <div className={styles.CheckoutButton}>
      <button
        role="link" 
        className={`${styles.CheckoutButtonStyle} ${buttonStateReady ? styles.CheckoutButtonStyleReady : ''} ${buttonStateActive ? styles.CheckoutButtonStyleActive : ''}`}
        onClick={() => handleCheckout()}
      >
        <div className={styles.CheckoutButtonText}>
          <p>Checkout</p>
        </div>

        <div className={styles.CheckoutButtonSpinnerContainer}>
          <div className={styles.CheckoutButtonSpinner} />
        </div>
      </button>
    </div>
  )
}