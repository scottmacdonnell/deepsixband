import Link from 'next/link'

import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <p>© 2021 deepsix. All Rights Reserved.</p>
      <p>
        {"View the source code on "}

        <Link href="https://github.com/scottmacdonnell/deepsixband">
          <a target="_blank" rel="noopener noreferrer">GitHub</a>
        </Link>
      </p>
    </div>
  )
}