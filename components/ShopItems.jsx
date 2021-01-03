import Link from 'next/link'
import { formatCurrencyString } from 'use-shopping-cart'

import { products } from '../data/products'

import styles from '../styles/components/ShopItems.module.scss'

export default function ShopItems() {
  return (
    <div className={styles.ShopItems}>
      <div className="Content">
        <div className={styles.ShopItemsContent}>
          {products.map((product) => {
            const { 
              slug,
              name,
              image
            } = product

            const href = `/product/${slug}`

            const price = formatCurrencyString({
              value: product.price,
              currency: product.currency,
              language: 'en-US'
            })

            return (
              <div className={styles.ShopItemsContentProduct}>
                <Link href={href}>
                  <div className={styles.ItemMeta}>
                    <a>
                      {/* <h3>{name}</h3>
                      <p>{price}</p> */}
                      <img src={image} alt={name} />
                    </a>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}