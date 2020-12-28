import styles from './LatestReleaseSkeleton.module.scss'

export default function LatestReleaseSkeleton() {
  return (
    <div className={styles.LatestReleaseSkeleton}>
      <div className={styles.AlbumArt}>
        <div className={styles.AlbumArtSkeleton} />
      </div>
      <div className={styles.AlbumMeta}>
        <div className={styles.TitleSkeleton} />
        <div className={styles.SubtitleSkeleton} />
        <div className={styles.SpotifyPlayerSkeleton} />
      </div>
    </div>
  )
}