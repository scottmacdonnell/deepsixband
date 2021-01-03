export default async (req, res) => {
  let result = []
  let i
  const reqURL = `https://api.songkick.com/api/3.0/artists/8723059/calendar.json?apikey=${process.env.SONGKICK_KEY}&per_page=5`

  const reqResponse = await fetch(reqURL)

  const data = await reqResponse.json()

  for (i of data.resultsPage.results.event) {
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
    result.push(event);
  }

  res.status(200).json({ shows: result })
}