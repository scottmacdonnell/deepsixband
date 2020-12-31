import useSWR from 'swr'
import { Line } from 'rc-progress';

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Test() {
  const { data, error } = useSWR(() => `/api/spotify/get-artist`, fetcher)
  if (error) return <div>{error.message}</div>
  if (!data) return <p>Loading</p>
  const { artist } = data
  return (
    <div>
      <Line percent={artist.popularity} strokeColor="#509bf5" />
    </div>
  )
}