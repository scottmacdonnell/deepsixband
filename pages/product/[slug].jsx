import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from '../../assets/styles/pages/product.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Product() {
  const { query } = useRouter()
  const { data, error } = useSWR(() => query.slug && `/api/product/${query.slug}`, fetcher)

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

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
    <div className={styles.Product}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Hollow Shirt - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
        </header>

        <main>
          <div className="Content">

            <div className={styles.ProductContent}>
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
        </main>
      </div>
      
      <Footer />
    </div>
  )
}