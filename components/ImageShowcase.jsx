import Image from 'next/image'

import styles from '../styles/components/ImageShowcase.module.scss'

export default function ImageShowcase({
  image1,
  image2,
  image3,
  image4
}) {
  return (
    <div className={styles.ImageShowcase}>
      <div className={styles.Image}>
        {image1 ? (
          <Image 
            src={image1}
            width={720}
            height={1080}
            objectFit="cover"
          />
        ) : <div /> }
      </div>

      <div className={styles.Image}>
        {image2 ? (
          <Image 
            src={image2}
            width={720}
            height={1080}
            objectFit="cover"
          />
        ) : <div /> }
      </div>

      <div className={styles.Image}>
        {image3 ? (
          <Image 
            src={image3}
            width={720}
            height={1080}
            objectFit="cover"
          />
        ) : <div /> }
      </div>

      <div className={styles.Image}>
        {image4 ? (
          <Image 
            src={image4}
            width={720}
            height={1080}
            objectFit="cover"
          />
        ) : <div /> }
      </div>
    </div>
  )
}