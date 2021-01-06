import Image from 'next/image'
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

export default function Releases({ amount }) {
  let display = []
  let i
  const { data } = useSWR(() => `/api/spotify/get-all-releases`, fetcher)
  if (!data) return <ReleasesSkeleton />

  const { releases } = data

  for (i in releases) {
    if (display.length !== amount) {
      display.push(releases[i]);
    }
  }

  display.shift()

  return (
    <div className={styles.Releases}>
      <div className="Content">
        <div className={styles.ReleasesContent}>

          {display.map((release) => {
            return (
              <div className={styles.ReleasesContentAlbum}>
                {/* <Link href={release.external_urls.spotify}>
                  <div className={styles.Release} style={{ 
                      background: `url(${release.images[1].url})`
                    }}
                  >
                    <div className={styles.ReleaseMeta}>
                      <a>
                        <div>
                          <a>
                            <h2>{release.name}</h2>
                          </a>
                        </div>
                      </a>
                    </div>
                  </div>
                </Link> */}
                <Link href={release.external_urls.spotify}>
                  <a>
                    <Image
                      src={release.images[1].url}
                      alt={release.name}
                      layout="fill"
                      unsized
                    />
                  </a>
                </Link>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

function ReleasesSkeleton() {
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