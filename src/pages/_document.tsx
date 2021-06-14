import Document, { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

const googleAnalytics = process.env.NEXT_PUBLIC_GA_ID

export default class MyDocument extends Document {
  render() {
    const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
    const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
    const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
    const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
    const keywords = process.env.KEYWORDS

    return (
      <Html lang='pt-br'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/favicon.ico' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />

          {/* Open Graph */}
          <meta name='og:title' content={pageTitle} key='ogtitle' />
          <meta name='og:type' content='website' />
          <meta name='og:url' content={pageUrl} />
          <meta name='og:description' content={description} />
          <meta name='og:image' content={imageUrl} />

          {/* Twitter */}
          <meta property='twitter:card' content='summary_large_image' key='twcard' />
          <meta property='twitter:image' content={imageUrl} />
          <meta name='twitter:creator' content='' key='twhandle' />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {googleAnalytics?.length > 0 && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${googleAnalytics}', {
                        page_path: window.location.pathname,
                      });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
