export default async (req, res) => {
  let result = []
  let i
  const authURL = 'https://accounts.spotify.com/api/token'
  const reqURL = `https://api.spotify.com/v1/artists/${process.env.SPOTIFY_URI}/albums?include_groups=album%2Csingle&market=ES`
  

  const authString = new Buffer(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
  const authEncoded = authString.toString('base64')

  let authHeaders = new Headers()
  authHeaders.append("Authorization", `Basic ${authEncoded}`)
  authHeaders.append("Content-Type", "application/x-www-form-urlencoded")

  let authBody = new URLSearchParams()
  authBody.append("grant_type", "client_credentials")

  const authResponse = await fetch(authURL, {
    method: 'POST',
    headers: authHeaders,
    body: authBody,
    redirect: 'follow'
  })
  
  const token = await authResponse.json()

  const reqAuth = `Bearer ${token.access_token}`

  let reqHeaders = new Headers()
  reqHeaders.append("Accept", "application/json")
  reqHeaders.append("Content-Type", "application/json")
  reqHeaders.append("Authorization", reqAuth)

  const reqResponse = await fetch(reqURL, {
    method: 'GET',
    headers: reqHeaders,
    redirect: 'follow'
  })

  const data = await reqResponse.json()

  res.status(200).json({ releases: data.items })
}