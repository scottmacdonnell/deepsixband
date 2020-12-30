import Link from 'next/link'
import useSWR from 'swr'

import styles from './Songkick.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Songkick() {
  const { data, error } = useSWR(() => `/api/songkick/get-shows`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <p>Loading</p>
  const { shows } = data
  return (
    <div className={styles.Songkick}>
      {shows.map((show) => {
        const { 
          date,
          venue,
          city,
          tickets
        } = show

        return (
          <div className={styles.Show}>
            <div className={styles.Date}>
              <h3>{date}</h3>
            </div>
            <div className={styles.Venue}>
              <p>{venue}</p>
            </div>
            <div className={styles.City}>
              <p>{city}</p>
            </div>
            <div className={styles.BuyTickets}>
              <p></p>
              <Link href={tickets}>
                <a>Buy Tickets</a>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}