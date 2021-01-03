import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ShopItems from '../components/ShopItems'

export default function Shop() {
  return (
    <div className="Shop">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Shop - deepsix</title>
      </Head>

      <div className="Page">
      
        <header>
          <Header 
            name="Shop"
          />
        </header>

        <main>
          <ShopItems />
        </main>

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}