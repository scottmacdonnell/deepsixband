import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import Releases from '../components/Releases'
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
          button="Stream Here"
          link="https://open.spotify.com/album/4wmsQwdwb0GhjUch19uiHQ"
        >
          <h1>'kerosene / hollow'</h1>
          <span>The New EP, out now.</span>
        </Banner>

        <div id="main" />

        <ImageFeature
          imageSrc="/images/index/about.jpg"
          imageRight
        >
          <h2>we're deepsix</h2>
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