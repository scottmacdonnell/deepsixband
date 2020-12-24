import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Order Success - deepsix</title>
      </Head>

      <div className="Page">
        <header>
          <div className="Content">
            <Header />
          </div>
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