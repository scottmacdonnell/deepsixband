import Nav from '../Nav/'

import styles from './Header.module.scss'

export default function Header({ page }) {
  return (
    <div className={styles.Header}>
      <div className="Content">
        <Nav />
        <div className={styles.HeaderArtist}>
          <div className={styles.HeaderMeta}>
            <h1>{page}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}