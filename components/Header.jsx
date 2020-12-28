import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../assets/styles/components/Header.module.scss'

export default function Header() {
  return (
    <div className={styles.Header}>
      <nav className={styles.SocialNav}>
        <ul>
          <li>
            <Link href="https://open.spotify.com/artist/0BFG1QbcRKPny71AbK7Xrf?si=F9vrFVYmQYOaxeYA0DW4uA">
              <a><FontAwesomeIcon icon={["fab", "spotify"]} /></a>
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com/deepsixband">
              <a><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/deepsixca">
              <a><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
            </Link>
          </li>
          {/* <li>
            <Link href="https://tiktok.com">
              <a><FontAwesomeIcon icon={["fab", "tiktok"]} /></a>
            </Link>
          </li> */}
          <li>
            <Link href="https://discord.gg/DD6MHeA">
              <a><FontAwesomeIcon icon={["fab", "discord"]} /></a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.MainNav}>
        <ul>
          <li>
            <Link href="/homepage">
              <a>Index</a>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <a>Music</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li> */}
          <li>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li> */}
          <li>
            <Link href="/checkout">
              <a><FontAwesomeIcon icon={["fas", "shopping-cart"]} /></a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}