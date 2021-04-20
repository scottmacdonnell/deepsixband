// "/api/spotify/get-releases"
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

import Container from './ui/Container'
import Spacer from './ui/Spacer'

import fetcher from '../lib/fetcher'

import styles from '../styles/components/Releases.module.scss'

export default function Releases() {
  const { data } = useSWR('/api/spotify/get-releases', fetcher)

  if (!data) {
    return null
  }

  const releases = data.releases
  
  return (
    <ReleasesComponent>
      {releases.map((item) => {
        return (
          <ReleasesItem name={item.name} image={item.images[0]} link={item.external_urls.spotify} length={item.total_tracks} />
        )
      })}

    </ReleasesComponent>
  )
}

function ReleasesItem({
  name,
  image,
  link,
  length
}) {
  let type
  type = length <= 6 ? '' : 'Album'
  type = length <= 3 ? type : 'EP'
  type = length > 3 ? type : 'Single'
  return (
    <Link
      href={link}
      style={{ display: 'contents' }}
    >
      <a target="_blank" rel="noopener noreferrer">
        <div className={styles.ReleasesItem}>
          <Image
            src={image.url}
            title={name}
            alt={name}
            width={image.width}
            height={image.height}
            objectFit="contain"
          />
          <Spacer />
          <span>{type}</span>
          <h5>{name}</h5>
        </div>
      </a>
    </Link>
  )
}

function ReleasesComponent(props) {
  return (
    <div className={styles.Releases}>
      <Container>
        <div className={styles.ReleasesContent}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}