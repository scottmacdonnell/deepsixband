import Head from 'next/head'

import Navbar from '../components/Navbar'
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
          <Navbar />
        </header>

        <main>
          <Cart />
        </main>

      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}