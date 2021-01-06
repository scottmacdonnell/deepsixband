# deepsix

## Development

You will need a .env.local file in the root of the directory containing the following:
```sh
# Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=#TEST_KEY_HERE
STRIPE_SECRET_KEY=#TEST_KEY_HERE

# Spotify Keys
SPOTIFY_URI=0BFG1QbcRKPny71AbK7Xrf
SPOTIFY_CLIENT_ID=#TEST_KEY_HERE
SPOTIFY_CLIENT_SECRET=#TEST_KEY_HERE

# Songkick Keys
SONGKICK_KEY=#TEST_KEY_HERE

# Mailchimp Keys
MAILCHIMP_API_SERVER=#SERVER_PREFIX_HERE
MAILCHIMP_API_KEY=#TEST_KEY_HERE
MAILCHIMP_LIST_ID=#LIST_ID_HERE
```

To start the development server:
```sh
# Initialize yarn and install dependencies
$ yarn

# Start dev server, will run on http://localhost:3000
$ yarn dev
```