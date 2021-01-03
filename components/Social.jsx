import dynamic from 'next/dynamic'

import styles from '../styles/components/Social.module.scss'

export default function Social() {
  let Twitter = dynamic(
    () => import('./Twitter'),
    { loading: () => <TwitterSkeleton /> }
  )
  return (
    <div className={styles.Social}>
      <div className="Content">
        <div className={styles.SocialContent}>
          <Twitter />
        </div>
      </div>
    </div>
  )
}

function TwitterSkeleton() {
  return <div className={styles.TwitterSkeleton} />
}