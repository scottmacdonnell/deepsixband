import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/Banner.module.scss'

export default function Banner({
  children,
  backgroundImage,
  button,
  link
}) {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerBackgroundImage}>
        <Image
          src={backgroundImage}
          // width={1440}
          // height={1080}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className={styles.BannerContent}>
        <div className={styles.BannerContentWrapper}>
          <div className={styles.BannerContainer}>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerMain}>
                {children}

                {button ? (
                    <Link href={link}>
                      <button>
                        {button}
                      </button>
                    </Link>
                  ) : (
                    <div />
                  )
                }
              </div>


                <div className={styles.BannerFooter}>
                  <Link href="#main" scroll={true} shallow>
                    <a>
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </a>
                  </Link>
                </div>

              
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}