import Head from 'next/head'

import Hero from '../components/Hero/'
import HeroSkeleton from '../components/Hero/HeroSkeleton/'
import Footer from '../components/Footer/'
import LatestRelease from '../components/LatestRelease/'
import ShopPreview from '../components/ShopPreview'
import Twitter from '../components/Twitter/'
import Songkick from '../components/Songkick/'
import Newsletter from '../components/Newsletter/'
import FeaturedArticles from '../components/FeaturedArticles/'

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
          {/* </div>

          <div className="Content">
            <h1>shop</h1>
            <ShopPreview />
            <h1>tour</h1>
            
            <h1>social</h1> */}

            
            {/* <LatestRelease /> */}
            {/* <Twitter /> */}
            <Songkick />
            <FeaturedArticles id="News" />
            {/* <Newsletter /> */}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}