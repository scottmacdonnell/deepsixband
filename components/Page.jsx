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
  const siteDescription = 'deepsix is an explosive new rock band hailing from the small-town suburbs of Uxbridge, Ontario.'
  const siteImage = `${siteURL}/images/og.jpg`

  const formattedPageName = pageName ? `${pageName} - ${siteName}` : siteName
  const formattedURL = slug ? `${siteURL}/${slug}` : siteURL
  const formattedDescription = description ? description : siteDescription
  const formattedImage = imageURL ? imageURL : siteImage

  return (
    <div className={className}>
      <Head>
        {/* Main */}
        <title>{formattedPageName}</title>
        <meta
          name='description'
          content={formattedDescription}
          key='description'
        />

        {/* Open Graph */}
        <meta
          name='og:site_name'
          property='og:site_name'
          content={siteName}
          key='ogsitename'
        />
        <meta
          name='og:title'
          property='og:title'
          content={formattedPageName}
          key='ogtitle'
        />
        <meta
          name='og:url'
          property='og:url'
          content={formattedURL}
          key='ogurl'
        />
        <meta
          name='og:image'
          property='og:image'
          content={formattedImage}
          key='ogimage'
        />
        <meta
          name='og:description'
          property='og:description'
          content={formattedDescription}
          key='ogdescription'
        />

        {/* Twitter Cards */}
        <meta name='twitter:title' content={formattedPageName} key='twtitle' />
        <meta
          name='twitter:description'
          content={formattedDescription}
          key='twdescription'
        />
        <meta name='twitter:image' content={formattedImage} key='twimage' />
      </Head>
      {children}
    </div>
  )
}