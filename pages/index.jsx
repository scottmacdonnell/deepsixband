import Link from 'next/link'

import Page from '../components/Page'
import Container from '../components/Container'

import Banner from '../components/Banner'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page
      className="Index"
    >
      <header id="header">
        <Banner />
      </header>

      <main id="main">        
        <Container>
          <section id="bloodmoney">
            <h2>bloodmoney</h2>
            <p className="Subtitle">Our new single, out now and available on all streaming services.</p>
            <p>
              <Link href="https://open.spotify.com/album/0JJKdl2Kb70tw3QCUhtmh4">
                <a className="Link" target="_blank" rel="noopener noreferrer">Spotify </a>
              </Link>
              <Link href="https://music.apple.com/us/album/bloodmoney-single/1534139352?uo=4">
                <a className="Link" target="_blank" rel="noopener noreferrer"> Apple Music </a>
              </Link>
              <Link href="https://play.google.com/store/music/album/Deepsix_bloodmoney?id=B66rlez3pl4uwxkiejcp4v5lmdy">
                <a className="Link" target="_blank" rel="noopener noreferrer"> YouTube </a>
              </Link>
              <Link href="http://www.amazon.com/gp/product/B08KJ1HDMX">
                <a className="Link" target="_blank" rel="noopener noreferrer"> Amazon Music </a>
              </Link>
              <Link href="https://www.deezer.com/album/176929692">
                <a className="Link" target="_blank" rel="noopener noreferrer"> Deezer </a>
              </Link>
            </p>
          </section>

          {/* <section id="tour">
            <h2>tour dates</h2>

            <p className="Subtitle">Due to lockdown restrictions, we are unable to play shows at this time.</p>
          </section>

          <section id="store">
            <h2>merch store</h2>

            <p className="Subtitle">Temporarily offline, we are just working on some new drip at the moment.</p>
          </section> */}

          <section id="contact">
            <h2>contact</h2>

            <p className="Subtitle">Any questions, inquries, concerns, we'll get back to you as soon as possible.</p>

            <p>
              <Link href="mailto:deepsixca@gmail.com">
                <a className="Link">deepsixca@gmail.com</a>
              </Link>
            </p>
          </section>
        </Container>
      </main>

      <footer id="footer">
        <Footer />
      </footer>

      <Container>
        <section className="Notice">
          <p>Okay, we're gonna get back to finishing up some new music, brb</p>
        </section>
      </Container>
    </Page>
  )
}