import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { useShoppingCart } from 'use-shopping-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../assets/styles/components/Cart.module.scss'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Cart() {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem
  } = useShoppingCart()

  const handleClick = async () => {
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

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  if (Object.keys(cartDetails).length === 0) {
    return (
      <div className={styles.Cart}>
        <h1>No items in cart</h1>
      </div>
    )
  } else {
    return (
      <div className={styles.Cart}>
        <h1>Review order</h1>
        {Object.keys(cartDetails).map((item) => {
          const cartItem = cartDetails[item]
          const { name, description, id, quantity, price, currency, image } = cartItem
          return (
            <div className={styles.Item}>
              <div className={styles.ItemImage}>
                <img src={image} alt="Product Image" />
              </div>
              <div className={styles.ItemMeta}>
                <div className={styles.ItemName}>
                  <p><b>{name}</b></p>
                </div>
                <div className={styles.ItemDescription}>
                  <p>{description}</p>
                </div>
                <div className={styles.ItemPrice}>
                  <p><b>${(price/100).toFixed(2)}</b></p>
                </div>
                <div className={styles.ItemFunctions}>
                  <button onClick={() => incrementItem(id)}>
                    <FontAwesomeIcon icon={["fas", "plus"]} />
                    {/* <p><b>+</b></p> */}
                  </button>
                  <p>{quantity}</p>
                  <button onClick={() => decrementItem(id)}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                    {/* <p><b>-</b></p> */}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <div className={styles.CartOverview}>
          <p>Product Quantity: {cartCount}</p>
          <p>Total Price: ${(totalPrice/100).toFixed(2)}</p>
          <button
            role="link" 
            onClick={handleClick}
          >
            Checkout
          </button>
        </div>
      </div>
    )
  }
}