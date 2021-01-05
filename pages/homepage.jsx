import Head from 'next/head'

import Hero from '../components/Hero'
import LatestRelease from '../components/LatestRelease'
import Releases from '../components/Releases'
import Songkick from '../components/Songkick'
import Social from '../components/Social'
import FeaturedArticles from '../components/FeaturedArticles'
import Newsletter from '../components/Newsletter'
import ShopItems from '../components/ShopItems'
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
          {/* <ShopItems /> */}
          <LatestRelease />
          <Releases amount="3" />
          {/* <Songkick /> */}
          <FeaturedArticles />
          <Social />
          {/* <Newsletter /> */}
        </main>

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}