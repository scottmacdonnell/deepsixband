import Head from 'next/head'

import Hero from '../components/Hero'
import Releases from '../components/Releases'
import Songkick from '../components/Songkick'
import FeaturedArticles from '../components/FeaturedArticles'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="Index">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario, Canada."/>
        <title>deepsix</title>
      </Head>

      <div className="Page">
      
        <header>
          <Hero />
        </header>

        <main>
          <Releases amount="3" />
          <Songkick />
          <FeaturedArticles />
          {/* <Newsletter /> */}
        </main>

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}