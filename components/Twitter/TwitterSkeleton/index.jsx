import styles from './TwitterSkeleton.module.scss'

export default function TwitterSkeleton() {
  return (
    <div className={styles.TwitterSkeleton}>
      <div className={styles.TimelineSkeleton}/>
    </div>
  )
}