import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

export default function Checkout() {
  return (
    <div className="Checkout">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Checkout - deepsix</title>
      </Head>
      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
        </header>

        <main>
          <div className="Content">
            <Cart />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}