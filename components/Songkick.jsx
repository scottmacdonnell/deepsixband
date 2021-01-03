import Link from 'next/link'
import useSWR from 'swr'

import styles from '../styles/components/Songkick.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Songkick() {
  const { data, error } = useSWR(() => `/api/songkick/get-shows`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <SongkickSkeleton />
  const { shows } = data
  return (
    <div className={styles.Songkick}>
      <div className="Content">
        <div className={styles.SongkickContainer}>

          {shows.map((show) => {
            const { 
              date,
              venue,
              city,
              tickets
            } = show

            return (
              <div className={styles.SongkickShow}>
                <div className={styles.SongkickShowVenue}>
                  <p><b>{venue}</b></p>
                </div>

                <div className={styles.SongkickShowCity}>
                  <p>{city}</p>
                </div>
                
                <div className={styles.SongkickShowCTA}>
                  <Link href={tickets}>
                    <button>More Info</button>
                  </Link>
                </div>
              </div>
            )
          })}


        </div>
      </div>
    </div>
  )
}

function SongkickSkeleton() {
  return (
    <div className={styles.SongkickSkeleton}>
      <div className="Content">
        <div className={styles.SongkickSkeletonContent}>
          <div className={styles.SongkickSkeletonContentShow} />
          <div className={styles.SongkickSkeletonContentShow} />
          <div className={styles.SongkickSkeletonContentShow} />
          <div className={styles.SongkickSkeletonContentShow} />
          <div className={styles.SongkickSkeletonContentShow} />
        </div>
      </div>
    </div>
  )
}