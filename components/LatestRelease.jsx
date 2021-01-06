import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import styles from '../styles/components/LatestRelease.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function LatestRelease() {
  const { data, error } = useSWR(() => `/api/spotify/get-latest-release`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <LatestReleaseSkeleton />
  const embed = `https://open.spotify.com/embed/album/${data.album.id}`
  return (
    <div className={styles.LatestRelease}>
      <div className="Content">
        <div className={styles.LatestReleaseContent}>
          <div className={styles.LatestReleaseContentAlbumArt}>
            <Link href={data.album.url}>
              <a>
                <Image 
                  src={data.album.image_medium.url}
                  alt={data.album.name}
                  layout="fill"
                  unsized
                />
              </a>
            </Link>
            
          </div>

          <div className={styles.LatestReleaseContentMeta}>
            <span>
              <h2>{data.album.name}</h2>
              <p>our new {data.album.album_type}, out now and availiable on all streaming services</p>
            </span>

            <div className={styles.LatestReleaseContentMetaSpotifyPlayer}>
              <iframe 
                src={embed}
                width={300}
                height={80}
                frameborder={0}
                allowtransparency="true"
                allow="encrypted-media" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

function LatestReleaseSkeleton() {
  return (
    <div className={styles.LatestReleaseSkeleton}>
      <div className="Content">
        <div className={styles.LatestReleaseSkeletonContent}>
          <div className={styles.LatestReleaseSkeletonContentAlbumArt} />
          <div className={styles.LatestReleaseSkeletonContentMeta} />
        </div>
      </div>
    </div>
  )
}