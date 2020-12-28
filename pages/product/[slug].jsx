import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import ProductDisplay from '../../components/ProductDisplay/'

export default function Product() {
  const { query } = useRouter()
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Product - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
        </header>

        <main>
          <div className="Content">
            <ProductDisplay
              slug={query.slug}
            /> 
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}