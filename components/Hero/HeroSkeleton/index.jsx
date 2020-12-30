import Header from '../../Header/'

import styles from './HeroSkeleton.module.scss'

export default function HeroSkeleton() {
  return (
    <div className={styles.HeroSkeleton}>
      <div className="Content">
        <Header />
        <div className={styles.Artist}>
          <div className={styles.Meta}>
            <div className={styles.TypeSkeleton}/>
            <div className={styles.NameSkeleton}/>
          </div>

          <div className={styles.Stats}>
            <div className={styles.StatSkeleton}/>
            <div className={styles.StatSkeleton}/>
            <div className={styles.StatSkeleton}/>
          </div>
        </div>
      </div>
    </div>
  )
}