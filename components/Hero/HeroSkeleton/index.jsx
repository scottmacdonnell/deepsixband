import Header from '../../Nav'

import styles from './HeroSkeleton.module.scss'

export default function HeroSkeleton() {
  return (
    <div className={styles.HeroSkeleton}>
      <div className="Content">
        <Header />
        <div className={styles.HeroArtistSkeleton}>
          <div className={styles.HeroMetaSkeleton}>
            <div className={styles.HeroTypeSkeleton}/>
            <div className={styles.HeroNameSkeleton}/>
          </div>

          <div className={styles.HeroStatsSkeleton}>
            <div className={styles.HeroStatSkeleton}/>
            <div className={styles.HeroStatSkeleton}/>
          </div>
        </div>
      </div>
    </div>
  )
}