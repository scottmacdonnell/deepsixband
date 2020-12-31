import Link from 'next/link'
import useSWR from 'swr'

import ReleasesSkeleton from './ReleasesSkeleton/'

import styles from './Releases.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Releases({ amount }) {
  let display = []
  let i
  const { data, error } = useSWR(() => `/api/spotify/get-all-releases`, fetcher)

  if (error) return <div>{error.message}</div>
  if (!data) return <ReleasesSkeleton amount={amount} />

  const { releases } = data

  for (i in releases) {
    if (display.length !== amount) {
      display.push(releases[i]);
    }
  }

  display.shift()
  
  return (
    <div className={styles.Releases}>
      <div className={styles.ReleasesGrid}>
        {display.map((release) => {
          return (
            <div className={styles.ReleaseContainer}>
              <Link href={release.external_urls.spotify}>
                <div className={styles.Release} style={{ 
                    background: `url(${release.images[1].url})`
                  }}
                >
                  <div className={styles.ReleaseMeta}>
                    <a>
                      <div>
                        <a>
                          <h2>{release.name}</h2>
                          <p>{release.album_type}</p>
                        </a>
                      </div>
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}