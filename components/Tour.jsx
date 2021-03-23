import Link from 'next/link'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import styles from '../styles/components/Tour.module.scss'

export default function Tour() {
  let shows = []
  
  const { data } = useSWR('/api/songkick/get-tour-dates', fetcher)

  if (!data) {
    return null
  }

  if (data.tourData.resultsPage.totalEntries == 0 && data.tourData.resultsPage.status == "ok") {
    return (
      <div className={styles.Tour}>
        <TourHeader />

        <TourMain>
          <span>We are currently unable to play shows, but we'll let you know as soon as we are back on the road.</span>
        </TourMain>
        
        <TourFooter />
      </div>
    )
  }

  if (data) {
    for (let i of data.tourData.resultsPage.results.event) {
      let date = i.start.date
      let venue = i.displayName
      let city = `${i.venue.metroArea.displayName}, ${i.venue.metroArea.country.displayName}`
      let tickets = `${i.uri}`
      let event = {
        date: date,
        venue: venue,
        city: city,
        tickets: tickets
      }
      shows.push(event)
    }

    return (
      <div className={styles.Tour}>
        <TourHeader />

        <TourMain>
          <table className={styles.TourShows}>
            {shows.map((show) => {
              return (
                <tr className={styles.TourShow}>
                  <td className={styles.Date}>{show.date}</td>
                  {/* <td>{show.city}</td> */}
                  {/* {show.tickets} */}
                  <td>{show.venue}</td>
                  <td className={styles.Tickets}>
                    <Link href={show.tickets}>
                      <button>Tickets</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </table>
        </TourMain>

        <TourFooter />
      </div>
    )
  }
}

function TourHeader() {
  return (
    <div className={styles.TourHeader}>
      <h2>Tour</h2>
    </div>
  )
}

function TourMain({
  children
}) {
  return (
    <div className={styles.TourMain}>
      {children}
    </div>
  )
}

function TourFooter() {
  return (
    <div className={styles.TourFooter}>
      <p>Powered by </p>
      <Link href="https://www.songkick.com/artists/10109726-deepsix">
        <a target="_blank" rel="noopener noreferrer">
          <SongkickLogo />
        </a>
      </Link>
    </div>
  )
}

function SongkickLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 411 112" height="1.5rem" fill="currentColor" shapeRendering="geometricPrecision">
      <defs/>
      <g fill-rule="evenodd">
        <path d="M267.4 68.6c-4.4 0-7.3-1.3-10.3-6-2.9-4.7-7.9-12.6-7.9-12.6l21.5-30H252l-17.1 23.8V.9h-15.6v82.4h15.6V57.2s8.7 13.7 11.4 18c4.3 6.5 10 8.3 19.4 8.3h4.6V68.6h-2.9zM407 68.6c-4.4 0-7.3-1.3-10.3-6-3-4.7-7.9-12.6-7.9-12.6l21.5-30h-18.7l-17.1 23.8V.9h-15.6v82.4h15.6V57.2s8.7 13.7 11.4 18c4.3 6.5 10 8.3 19.4 8.3h4.6V68.6H407zM24.3 84C14.6 84 6.7 82.2.2 75.6l10-10c3.3 3.3 9.1 4.5 14.2 4.5 6.2 0 9.1-2 9.1-5.7 0-1.5-.4-2.8-1.2-3.8-.8-.8-2.1-1.4-4.2-1.7l-7.7-1.1c-5.6-.8-9.9-2.7-12.7-5.6-2.9-3-4.4-7.3-4.4-12.7 0-11.6 8.7-20.1 23.2-20.1 9.1 0 16 2.1 21.4 7.6l-9.8 9.8c-4-4-9.3-3.7-12-3.7-5.4 0-7.7 3.1-7.7 5.9 0 .8.3 2 1.2 2.9.8.8 2.1 1.6 4.4 1.9l7.7 1.1c5.7.8 9.8 2.6 12.5 5.3 3.4 3.3 4.7 8 4.7 13.9C48.8 76.9 37.7 84 24.3 84zM96.4 76.9c-4.6 4.6-10 7.1-17.7 7.1-7.8 0-13.1-2.5-17.7-7.1-6.7-6.7-6.4-15.6-6.4-25.2 0-9.5-.3-18.5 6.4-25.1 4.6-4.6 10-7.1 17.7-7.1 7.8 0 13.1 2.5 17.7 7.1 6.7 6.7 6.4 15.6 6.4 25.1 0 9.5.2 18.5-6.4 25.2zM84.9 36.1c-1.2-1.5-3.4-2.8-6.2-2.8-2.9 0-5.1 1.2-6.2 2.8-1.4 1.9-2.3 4-2.3 15.6s.9 13.7 2.3 15.5c1.2 1.5 3.4 2.9 6.2 2.9 2.9 0 5.1-1.3 6.2-2.9 1.4-1.9 2.3-3.9 2.3-15.5s-.9-13.7-2.3-15.6zM329.3 84.1c-7.4 0-13-2.5-17.6-7.1-6.7-6.7-6.4-15.6-6.4-25.2 0-9.5-.3-18.5 6.4-25.1 4.6-4.6 10.2-7.1 17.6-7.1 12 0 21.7 6.7 24.1 20.7h-15.9c-1-3.6-2.9-6.8-8.1-6.8-2.9 0-5 1.2-6.1 2.7-1.4 1.9-2.4 4.1-2.4 15.7s1 13.8 2.4 15.7c1.2 1.5 3.3 2.7 6.1 2.7 5.2 0 7.1-3.2 8.1-6.8h15.9c-2.3 13.9-12.1 20.6-24.1 20.6zM196 88.1c0 8.4-5.8 9.8-9.5 9.8h-5.7v13.9h6.9c15.5-.1 24-8.2 24-23.8l-.1-46.9c0-7.3-3.4-13.1-8.3-16.9-4.4-3.3-10-5-15.6-5-7.4 0-13 2.5-17.6 7.1-6.7 6.7-6.4 15.6-6.4 25.1 0 9.5-.3 18.5 6.4 25.2 4.6 4.6 10.2 7.1 17.6 7.1 2.9 0 5.5-.6 8.3-1.9v6.3zm-8.2-18c-2.9 0-5-1.2-6.1-2.7-1.4-1.9-2.4-4.1-2.4-15.7s1-13.8 2.4-15.7c1.2-1.5 3.3-2.7 6.1-2.7 5.1 0 7.1 3.1 8.1 6.6v23.6c-1 3.5-3 6.6-8.1 6.6zM157.4 47.5c0-6.5.3-14.3-6.4-20.9-4.6-4.6-10-7.1-17.7-7.1-7.8 0-13.1 2.5-17.7 7.1-6.7 6.7-6.4 14.9-6.4 20.9v36h15.6v-36c0-8.1.9-9.3 2.3-11.2 1.2-1.5 3.4-3 6.2-3 2.9 0 5.1 1.5 6.2 3 1.4 1.9 2.3 2.9 2.3 11.2v35.9h15.6V47.5zM290.4 13.6V1h-15.5v12.6h15.5zM274.5 20.1h15.9v38.8c0 6.9 4.4 9.8 9.6 9.8h3.6v14.8h-5.1c-15.8-.1-24-8.8-24-24V20.1z"/>
      </g>
    </svg>
  )
}