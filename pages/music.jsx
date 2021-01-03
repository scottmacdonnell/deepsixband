import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Checkout() {
  return (
    <div className="Checkout">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Music - deepsix</title>
      </Head>
      <div className="Page">
        
        <header>
          <Navbar />
        </header>

        <main>
          <h1>Music</h1>
        </main>

      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}