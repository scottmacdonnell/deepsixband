# deepsix

## Development

You will need a .env.local file in the root of the directory containing the following:
```sh
# Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=#TEST_KEY_HERE
STRIPE_SECRET_KEY=#TEST_KEY_HERE
```

To start the development server:
```sh
# Initialize yarn and install dependencies
$ yarn

# Start dev server, will run on http://localhost:3000
$ yarn dev
```