import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Tour from '../components/Tour'

import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Banner 
          backgroundImage="/images/kero.jpg"
          button="Pre-Save"
          link="https://distrokid.com/hyperfollow/deepsix/kerosene--hollow"
        >
          <h1>'kerosene / hollow'</h1>
          <span>Double Single, out 23 / 04 / 2021.</span>
        </Banner>

        <div id="main" />

        {/* <Merch /> */}


        <Container>
          <Tour />
        </Container>
        
        
        
      </main>

      <footer>
        {/* <Container>
          <Footer />
        </Container> */}
      </footer>
    </Page>
  )
}