import Head from 'next/head'
import useSWR from 'swr'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

import ProductDisplaySkeleton from './ProductDisplaySkeleton/'

import styles from './ProductDisplay.module.scss'

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
  
  if (!data) return ( 
    <div>
      <ProductDisplaySkeleton />
    </div>
  )

  const { addItem } = useShoppingCart()

  const addToCart = async () => {
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
  }

  const price = formatCurrencyString({
    value: data.price,
    currency: data.currency,
    language: 'en-US'
  })

  return (
    <div>
      <Head>
        <title>{data.name} - deepsix</title>
      </Head>
      <div className={styles.ProductDisplay}>
        <div className={styles.ProductImage}>
          <img src={data.image} alt="Product Image"/>
        </div>

        <div className={styles.ProductMeta}>
          <h1>{data.name}</h1>
          <h2>{price}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. </p>

          <div className="ProductOptions">
            <select name="product-options" id="product-options">
              {Object.keys(data.attribute).map((attribute) => {
                const productAttribute = data.attribute[attribute]
                const { value } = productAttribute
                return (<option value={value}>{value}</option>)
              })}
            </select>
          </div>

          <div className="AddToCart">
            <button className="Regular" onClick={() => addToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
