import Head from 'next/head'

import Hero from '../components/Hero'
import HeroAlt from '../components/HeroAlt'

import Releases from '../components/Releases'
import ReleasesAlt from '../components/ReleasesAlt'

import Songkick from '../components/Songkick'
import FeaturedArticles from '../components/FeaturedArticles'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="Index">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="deepsix, new rock, new rock mafia, new, rock, mafia, band, hard rock, cobain, bloodmoney, reckless youth, reckless, youth"/>
        <meta name="description" content="deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario, Canada."/>
        <title>deepsix</title>
      </Head>

      <div className="Page">
      
        <header>
          <HeroAlt />
        </header>

        <main>
          <ReleasesAlt />
          {/* <Releases amount="3" /> */}
          {/* <Songkick />
          <FeaturedArticles /> */}
          <Newsletter />
        </main>

      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}