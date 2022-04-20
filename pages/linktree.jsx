import Link from 'next/link'
import Page from '../components/Page'

export default function Index() {
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
      </header>

      <main>
        <Link href="https://linktr.ee/deepsixca">
          <a>
            <p>Click here if not automatically redirected.</p>
          </a>
        </Link>
      </main>

      <footer>
      </footer>
    </Page>
  )
}