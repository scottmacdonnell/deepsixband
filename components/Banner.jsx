import Link from 'next/link'

import Container from './Container'

export default function Banner() {
  return (
    <div>
      <Container>
        <br/>
        <h1>deepsix</h1>
        <p className="Subtitle">An explosive new rock band hailing from the small-town suburbs of Uxbridge, Ontario.</p>
        <p>
          <Link href="https://twitter.com/deepsixca">
            <a className="Link" target="_blank" rel="noopener noreferrer">Twitter </a>
          </Link>
          <Link href="https://instagram.com/deepsixband">
            <a className="Link" target="_blank" rel="noopener noreferrer"> Instagram </a>
          </Link>
          <Link href="https://www.facebook.com/deepsixca/">
            <a className="Link" target="_blank" rel="noopener noreferrer"> Facebook </a>
          </Link>
          <Link href="https://discord.gg/8twtCafpxR">
            <a className="Link" target="_blank" rel="noopener noreferrer"> Discord </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC_pjWZOhku0lwOf9HmCUOvA">
            <a className="Link" target="_blank" rel="noopener noreferrer"> YouTube </a>
          </Link>
          <Link href="https://www.twitch.tv/deepsixband">
            <a className="Link" target="_blank" rel="noopener noreferrer"> Twitch </a>
          </Link>
        </p>
      </Container>
    </div>
  )
}