import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from '../components/Page'
import Container from '../components/Container'

export default function PreSave() {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    router.push('https://distrokid.com/hyperfollow/deepsix/kerosene--hollow')
  }

  return (
    <Page
      className="PreSave"
      pageName="Pre-Save 'kerosene / hollow'"
      slug="/presave"
      description="Pre-save our new double single 'kerosene / hollow'."
      imageURL="/images/og/presave.jpg"
    >
      <header>
        
      </header>

      <main>
        <Container>
          <p>
            {"If not automatically redirected, "}
            <Link href="https://distrokid.com/hyperfollow/deepsix/kerosene--hollow">
              <a target="_blank" rel="noopener noreferrer" style={{color: 'blue', textDecoration: 'underline'}}>click here</a>
            </Link>
            {"."}
          </p>
        </Container>
      </main>

      <footer>
        
      </footer>
      
    </Page>
  )
}