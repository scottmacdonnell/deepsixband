import useSWR from 'swr'

import LatestReleaseSkeleton from './LatestReleaseSkeleton/'

import styles from './LatestRelease.module.scss'

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
  if (!data) return <div><LatestReleaseSkeleton /></div>
  const embed = `https://open.spotify.com/embed/album/${data.album.id}`
  return (
    <div className={styles.LatestRelease}>
      <div className={styles.AlbumArt}>
        <img src={data.album.image_medium.url} alt=""/>
      </div>

      <div className={styles.AlbumMeta}>
          <h1>{data.album.name}</h1>
          <p>our new {data.album.album_type}, out now and availiable on all streaming services</p>
        <div className={styles.SpotifyPlayer}>
          <iframe 
            src={embed} 
            width="300" 
            height="80" 
            frameborder="0" 
            allowtransparency="true"
            allow="encrypted-media" 
          />
        </div>
        
      </div>
    </div>
  )
}