import styles from './SongkickSkeleton.module.scss'

export default function SongkickSkeleton() {
  return (
    <div className={styles.SongkickSkeleton}>
      <div className={styles.Show} />
      <div className={styles.Show} />
      <div className={styles.Show} />
      <div className={styles.Show} />
      <div className={styles.Show} />
    </div>
  )
}