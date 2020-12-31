import Head from 'next/head'

import Hero from '../components/Hero/'
import Footer from '../components/Footer/'
import LatestRelease from '../components/LatestRelease/'
import ShopPreview from '../components/ShopPreview/'
import Twitter from '../components/Twitter/'
import Songkick from '../components/Songkick/'
import Newsletter from '../components/Newsletter/'
import FeaturedArticles from '../components/FeaturedArticles/'
import Test from '../components/Test/'
import Releases from '../components/Releases/'

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
          <div className="Content">
            {/* <Test /> */}
            <Releases amount="3" />
            <ShopPreview />
            <Songkick />
            <FeaturedArticles id="News" />
            <Newsletter />
            {/* <Twitter />
            <LatestRelease /> */}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}