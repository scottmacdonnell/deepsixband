import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/ProductDisplay.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function ProductDisplay({ slug }) {
  
  const { data, error } = useSWR(() => slug && `/api/product/${slug}`, fetcher)
  
  if (!data) return <ProductDisplaySkeleton />

  const price = formatCurrencyString({
    value: data.price,
    currency: data.currency,
    language: 'en-US'
  })

  return (
    <div className={styles.ProductDisplay}>
      <Head>
        <title>{data.name} - deepsix</title>
      </Head>
      <div className={styles.ProductDisplayContent}>
        <div className={styles.ProductDisplayContentImage}>
          <Image 
            src={data.image}
            alt="Product Image"
            layout="fill"
            unsized
          />
        </div>

        <div className={styles.ProductDisplayContentMeta}>
          <h1>{data.name}</h1>
          <h2>{price}</h2>
          <p>{data.description}</p>

          <div className={styles.ProductDisplayContentMetaFunctions}>
            <div className={styles.ProductDisplayContentMetaFunctionsProductOptions}>
              <div class={styles.ProductDisplayContentMetaFunctionsProductOptionsSelect}>
                <select name="product-options" id="product-options">
                  {Object.keys(data.attribute).map((attribute) => {
                    const productAttribute = data.attribute[attribute]
                    const { value } = productAttribute
                    return (<option value={value}>{value}</option>)
                  })}
                </select>
              </div>

              <div class={styles.ProductDisplayContentMetaFunctionsProductOptionsIcon}>
                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
              </div>
            </div>

            <div className={styles.ProductDisplayContentMetaFunctionsAddToCart}>
              <AddToCart
                data={data}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function AddToCart({ data }) {
  const [buttonStateReady, setButtonStateReady] = useState(true)
  const [buttonStateActive, setButtonStateActive] = useState(false)
  const [buttonStateAfter, setButtonStateAfter] = useState(false)
  
  const { addItem } = useShoppingCart()

  const addToCart = async () => {
    setButtonStateActive(true)
    setButtonStateReady(false)
    const option = document.getElementById("product-options")
    const item_id = data.attribute[option.value].id
    const item_price_id = data.attribute[option.value].price_id
    const item_description = data.attribute[option.value].description
    const item = {
      name: data.name,
      description: item_description,
      id: item_id,
      price_id: item_price_id,
      price: data.price,
      currency: 'USD',
      image: data.image,
    }
    addItem(item)
    setTimeout(addedToCart, 1000);
  }

  const addedToCart = () => {
    setButtonStateAfter(true)
    setButtonStateActive(false)
    setTimeout(resetButton, 1000);
  }

  const resetButton = () => {
    setButtonStateReady(true)
    setButtonStateAfter(false)
  }

  return (
    <div className={styles.AddToCart}>
      <button
        className={`${styles.AddToCartButton} ${buttonStateReady ? styles.AddToCartButtonReady : ''} ${buttonStateActive ? styles.AddToCartButtonActive : ''} ${buttonStateAfter ? styles.AddToCartButtonAfter : ''}`}
        onClick={() => addToCart()}
      >
        <div className={styles.AddToCartButtonText}>
          <p>Add To Cart</p>
        </div>

        <div className={styles.AddToCartButtonSpinnerContainer}>
          <div className={styles.AddToCartButtonSpinner} />
        </div>

        <div className={styles.AddToCartButtonCheck}>
          <svg role="img" focusable="false" height="32" width="32" viewBox="0 0 24 24" aria-hidden="true" class="Svg-sc-1usfroi-0 epEIZP">
            <polyline points="6.66 12 10.43 16.41 17.32 8.34" fill="none" stroke="#f1f1f1"/>
          </svg>
        </div>
      </button>
    </div>
  )
}

function ProductDisplaySkeleton() {
  return (
    <div className={styles.ProductDisplaySkeleton}>
      <div className={styles.ProductDisplaySkeletonContent}>
        <div className={styles.ProductDisplaySkeletonContentImage}>
          <div className={styles.ProductDisplaySkeletonContentImageSkeleton} />
        </div>
        <div className={styles.ProductDisplaySkeletonContentMeta}>
          <div className={styles.ProductDisplaySkeletonContentMetaNameSkeleton}/>
          <div className={styles.ProductDisplaySkeletonContentMetaPriceSkeleton}/>
          <div className={styles.ProductDisplaySkeletonContentMetaDescriptionSkeleton}/>
          <div className={styles.ProductDisplaySkeletonContentMetaFunctions}>
            <div className={styles.ProductDisplaySkeletonContentMetaFunctionsSkeleton}/>
            <div className={styles.ProductDisplaySkeletonContentMetaFunctionsSkeleton}/>
          </div>
        </div>
      </div>
    </div>
  )
}