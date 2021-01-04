import useSWR from 'swr'

import Navbar from './Navbar'

import styles from '../styles/components/Header.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Header({ name }) {
  const { data, error } = useSWR(() => `/api/spotify/get-artist`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <HeaderSkeleton />
  const { artist } = data
  return (
    <div className={styles.Header}>
      <Navbar />
      
      <div className="Content">
        <div className={styles.HeaderContent}>
          <div className={styles.HeaderContentMeta}>
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderSkeleton() {
  return (
    <div className={styles.HeaderSkeleton}>
      <Navbar />
      
      <div className="Content">
        <div className={styles.HeaderSkeletonContent}>
          <div className={styles.HeaderSkeletonContentMeta}>
            <div className={styles.HeaderSkeletonContentMetaName} />
          </div>
        </div>
      </div>
    </div>
  )
}