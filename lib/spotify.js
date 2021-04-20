import querystring from 'querystring'

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_URI: uri
} = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const RELEASES_ENDPOINT = `https://api.spotify.com/v1/artists/${uri}/albums?include_groups=album%2Csingle&market=ES`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'client_credentials'
    })
  })

  return response.json()
}

export const getReleases = async () => {
  const { access_token } = await getAccessToken()

  return fetch(RELEASES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}