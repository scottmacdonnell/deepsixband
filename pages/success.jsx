import Head from 'next/head'
import { useShoppingCart } from 'use-shopping-cart'

import Header from '../components/Header/'
import Footer from '../components/Footer/'

export default function Success() {
  const { clearCart } = useShoppingCart()
  clearCart()
  return (
    <div className="Success">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Order Success - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <Header 
            page="Success"
          />
        </header>

        <main>
          <div className="Content">
            <h1>Success</h1>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}