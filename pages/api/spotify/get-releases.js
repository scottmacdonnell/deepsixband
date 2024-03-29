import { getReleases } from '../../../lib/spotify'

export default async (_, res) => {
  const response = await getReleases()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ releases: false })
  }

  const releases = await response.json()

  const formattedReleases = releases.items.filter((v,i,a)=>a.findIndex(v2=>(v2.name===v.name))===i)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json({ releases: formattedReleases })
}