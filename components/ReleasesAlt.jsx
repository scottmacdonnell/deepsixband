import Link from 'next/link'
import useSWR from 'swr'

import styles from '../styles/components/Releases.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function ReleasesAlt({ amount }) {
  let display = []
  let i
  const { data, error } = useSWR(() => `/api/spotify/get-all-releases`, fetcher)

  if (error) return <div>{error.message}</div>
  if (!data) return <ReleasesAltSkeleton />

  const { releases } = data

  for (i in releases) {
    if (display.length !== amount) {
      display.push(releases[i]);
    }
  }

  display.shift()

  return (
    <p>releases</p>
  )
}

function ReleasesAltSkeleton() {
  return (
    <div className={styles.ReleasesSkeleton}>
      <div className="Content">
        <div className={styles.ReleasesSkeletonContent}>
          <div className={styles.ReleasesSkeletonContentAlbum} />
          <div className={styles.ReleasesSkeletonContentAlbum} />
          <div className={styles.ReleasesSkeletonContentAlbum} />
        </div>
      </div>
    </div>
  )
}