import useSWR from 'swr'

import HeroSkeleton from './HeroSkeleton/'
import Header from '../Header/'

import styles from './Hero.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Hero() {
  const { data, error } = useSWR(() => `/api/spotify/get-artist`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <HeroSkeleton />
  const { artist } = data
  return (
    <div className={styles.Hero}>
      <div className="Content">
        <Header />
        <div className={styles.Artist}>
          <div className={styles.Meta}>
            <div className={styles.Type}>
              <p>{artist.type}</p>
              <svg role="img" focusable="false" height="16" width="16" viewBox="0 0 24 24" aria-hidden="true" class="Svg-sc-1usfroi-0 epEIZP">
                <circle cx="12" cy="12" r="9.5" fill="#509bf5" stroke="#509bf5"/>
                <polyline points="6.66 12 10.43 16.41 17.32 8.34" fill="none" stroke="#fff"/>
              </svg>
            </div>
            <h1>{artist.name}</h1>
          </div>

          <div className={styles.Stats}>
            <p>popularity</p>
            <p>{artist.popularity}</p>
            <br/>
            <p>streams</p>
            <p>{artist.streams}</p>
            <br/>
            <p>followers</p>
            <p>{artist.followers}</p>
          </div>
        </div>
      </div>
    </div>
  )
}