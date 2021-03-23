import Head from 'next/head'

export default function Page({
  children,
  className,
  pageName,
  slug,
  description,
  imageURL,
}) {
  const siteName = 'deepsix'
  const siteURL = 'https://deepsixband.com'
  const siteDescription = 'deepsix is an explosive new rock band hailing from the small-town suburbs of Ontario, Canada.'
  const siteImage = `${siteURL}/images/og/index.jpg`

  const formattedPageName = pageName ? `${pageName} - ${siteName}` : siteName
  const formattedURL = slug ? `${siteURL}${slug}` : siteURL
  const formattedDescription = description ? description : siteDescription
  const formattedImage = imageURL ? `${siteURL}${imageURL}` : siteImage

  return (
    <div className={className}>
      <Head>
        <title>{formattedPageName}</title>
        <meta
          name="description"
          content={formattedDescription}
          key="description"
        />

        <meta
          name="og:site_name"
          property="og:site_name"
          content={siteName}
          key="og:sitename"
        />
        <meta
          name="og:title"
          property="og:title"
          content={formattedPageName}
          key="og:title"
        />
        <meta
          name="og:url"
          property="og:url"
          content={formattedURL}
          key="og:url"
        />
        <meta
          name="og:image"
          property="og:image"
          content={formattedImage}
          key="og:image"
        />
        <meta
          name="og:description"
          property="og:description"
          content={formattedDescription}
          key="og:description"
        />

        <meta name="twitter:title" content={formattedPageName} key="twitter:title" />
        <meta
          name="twitter:description"
          content={formattedDescription}
          key="twitter:description"
        />
        <meta name="twitter:image" content={formattedImage} key="twitter:image" />
      </Head>

      {children}
    </div>
  )
}