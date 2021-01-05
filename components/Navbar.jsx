import React, { useState } from 'react';
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.Navbar}>

      <MobileNav />
      <DesktopNav />

    </div>
  )
}

function MobileNav(props) {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const toggle = () => {
    setMobileNavShown(!mobileNavShown)
  }
  return (
    <div className={`${styles.MobileNav} ${mobileNavShown ? styles.MobileNavActive : ''}`}>
      <div className={styles.MobileNavToggle} onClick={toggle}>
        <div className={styles.MobileNavToggleIcon}>
          <div className={styles.MobileNavToggleIconTopBar} />
          <div className={styles.MobileNavToggleIconBtmBar} />
        </div>
      </div>

      <div className={styles.MobileNavContent}>
        <nav className={styles.MobileNavContentMainNav}>
          <Link href="/homepage">
            <a>Index</a>
          </Link>

          <Link href="/music">
            <a>Music</a>
          </Link>

          <Link href="/shop">
            <a>Shop</a>
          </Link>

          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </nav>

        <nav className={styles.MobileNavContentSocialNav}>
            <Link href="https://open.spotify.com/artist/0BFG1QbcRKPny71AbK7Xrf?si=F9vrFVYmQYOaxeYA0DW4uA">
              <a><FontAwesomeIcon icon={["fab", "spotify"]} /></a>
            </Link>

            <Link href="https://instagram.com/deepsixband">
              <a><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
            </Link>

            <Link href="https://twitter.com/deepsixca">
              <a><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
            </Link>

            <Link href="https://discord.gg/DD6MHeA">
              <a><FontAwesomeIcon icon={["fab", "discord"]} /></a>
            </Link>
        </nav>
      </div>
    </div>
  )
}

function DesktopNav() {
  return (
    <div className={styles.DesktopNav}>
      <div className="Content">
        <div className={styles.DesktopNavContent}>
          <nav className={styles.DesktopNavContentSocialNav}>
            <Link href="https://open.spotify.com/artist/0BFG1QbcRKPny71AbK7Xrf?si=F9vrFVYmQYOaxeYA0DW4uA">
              <a className={styles.NavbarLink}>
                <FontAwesomeIcon icon={["fab", "spotify"]} />
              </a>
            </Link>

            <Link href="https://instagram.com/deepsixband">
              <a className={styles.NavbarLink}>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>

            <Link href="https://twitter.com/deepsixca">
              <a className={styles.NavbarLink}>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </Link>

            <Link href="https://discord.gg/DD6MHeA">
              <a className={styles.NavbarLink}>
                <FontAwesomeIcon icon={["fab", "discord"]} />
              </a>
            </Link>
          </nav>
          <div className={styles.DesktopNavContentMainNav}>
            <Link href="/homepage">
              <a className={styles.NavbarLink}>Index</a>
            </Link>

            <Link href="/music">
              <a className={styles.NavbarLink}>Music</a>
            </Link>

            <Link href="/shop">
              <a className={styles.NavbarLink}>Shop</a>
            </Link>

            <Link href="/checkout">
              <a>
                <Cart />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cart() {
  const { cartCount } = useShoppingCart()
  return (
    <div className={styles.Cart}>
      <span className={`${styles.CartIcon} ${styles.NavbarLink}`}><FontAwesomeIcon icon={["fas", "shopping-cart"]} /></span>
      <div className={styles.CartBadge}>
        <span>{cartCount}</span>
      </div>
    </div>
  )
}