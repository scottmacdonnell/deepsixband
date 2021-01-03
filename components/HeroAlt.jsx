// karl damus

import useSWR from 'swr'

import Navbar from './Navbar'

import styles from '../styles/components/HeroAlt.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function HeroAlt() {
  const { data, error } = useSWR(() => `/api/spotify/get-artist`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <HeroSkeleton />
  const { artist } = data
  return (
    <div className={styles.HeroAlt}>
      <Navbar />
      <div className={styles.HeroAltContentBox}>
        {/* <img className={styles.logo} src="../public/logo.svg" /> */}
        <h1 className={styles.logo}>{artist.name}</h1>
      </div>
    </div>
  )
}

function HeroSkeleton() {
  return (
    <div className={styles.HeroSkeleton}>
      <Navbar />
      <div className="Content">
        <div className={styles.HeroArtistSkeleton}>
          <div className={styles.HeroMetaSkeleton}>
            <div className={styles.HeroTypeSkeleton}/>
            <div className={styles.HeroNameSkeleton}/>
          </div>

          {/* <div className={styles.HeroStatsSkeleton}>
            <div className={styles.HeroStatSkeleton}/>
            <div className={styles.HeroStatSkeleton}/>
          </div> */}
        </div>
      </div>
    </div>
  )
}