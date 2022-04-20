module.exports = {
  target: "serverless",
  images: {
    domains: ['i.scdn.co', 'lh3.googleusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/linktree',
        destination: 'https://linktr.ee/deepsixca',
        permanent: false,
        basePath: false
      },
    ]
  },
}