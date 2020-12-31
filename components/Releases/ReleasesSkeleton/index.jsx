import styles from './ReleasesSkeleton.module.scss'

export default function ReleasesSkeleton({ amount }) {
  let i = 0
  let display = []
  for (i; i < amount; i++) {
    display.push("element")
  }
  console.log(display)
  return (
    <div className={styles.ReleasesSkeleton}>
      <div className={styles.ReleasesGridSkeleton}>
        {display.map(() => {
          return(
            <div className={styles.ReleaseContainerSkeleton}>
              <div className={styles.ReleaseSkeleton} />
            </div>
          )
        })}
      </div>
    </div>
  )
}