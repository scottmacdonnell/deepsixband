import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import Releases from '../components/Releases'
import Merch from '../components/Merch'
import Tour from '../components/Tour'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Navbar />
      </header>

      <main>
        <Banner
          backgroundImage="/images/index/banner.jpg"
          button="Pre-Save"
          link="https://distrokid.com/hyperfollow/deepsix/kerosene--hollow"
        >
          <h1>'kerosene / hollow'</h1>
          <span>The New EP, out 23 / 04 / 2021.</span>
        </Banner>

        <div id="main" />

        <ImageFeature
          imageSrc="/images/index/about.jpg"
          imageRight
        >
          <h2>hey, we're deepsix</h2>
          <p>- an explosive new rock band hailing from the small-town suburbs of Ontario, Canada.</p>
        </ImageFeature>

        <Releases />

        {/* <Merch /> */}

        <Tour />

        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}