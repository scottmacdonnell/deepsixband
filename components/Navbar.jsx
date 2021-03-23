import React, { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
  const [navShown, setNavShown] = useState(false)

  const toggle = () => setNavShown(!navShown)

  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContainer}>
        <div className={`${styles.NavbarWrapper} ${navShown ? styles.NavbarActive : ''}`}>
          <div className={styles.NavbarLeft}>
            <nav className={styles.Social}>
              <Link href="https://twitter.com/deepsixca" aria-label="Twitter">
                <a className="Link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </Link>
              <Link href="https://instagram.com/deepsixband" aria-label="Instagram">
                <a className="Link" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <path d="M17.5 6.5h.01"/>
                  </svg>
                </a>
              </Link>
            </nav>
          </div>

          <div className={styles.NavbarRight}>
            <div className={styles.NavbarToggle} onClick={toggle}>
              <div className={styles.NavbarToggleContainer}>
                <div className={styles.NavbarToggleIcon}>
                  <div className={styles.NavbarToggleTopBar} />
                  <div className={styles.NavbarToggleBtmBar} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.NavbarContent}>
            <div className={styles.NavbarContentContainer}>
              <div className={styles.NavbarContentWrapper}>
                <MainNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainNav() {
  return (
    <nav className={styles.MainNav}>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </nav>
  )
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 2 20 20"
      fill="currentColor"
      className={styles.Logo}
    >
      <path d="M13,2l9,13.6L13,22ZM11,2,2,15.6,11,22Z" />
    </svg>
  )
}