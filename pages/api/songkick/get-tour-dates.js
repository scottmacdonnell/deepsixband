export default async (_, res) => {
  const artistID = '10109726'
  // const artistID = '8723059'
  const requestURL = `https://api.songkick.com/api/3.0/artists/${artistID}/calendar.json?apikey=${process.env.SONGKICK_KEY}&per_page=5`

  const response = await fetch(requestURL)
  const tourData = await response.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tourData })
}