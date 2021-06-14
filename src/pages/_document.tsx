import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default class MyDocument extends Document {
  render() {
    const NEXT_PUBLIC_SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME
    const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
    const NEXT_PUBLIC_SITE_IMAGE = process.env.NEXT_PUBLIC_SITE_IMAGE
    const NEXT_PUBLIC_SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
    const KEYWORDS = process.env.KEYWORDS
    return (
      <Html lang='pt-br'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content={NEXT_PUBLIC_SITE_DESCRIPTION} />
          <meta name='keywords' content={KEYWORDS} />

          {/* Open Graph */}
          <meta name='og:title' content={NEXT_PUBLIC_SITE_NAME} key='ogtitle' />
          <meta name='og:type' content='website' />
          <meta name='og:url' content={NEXT_PUBLIC_SITE_URL} />
          <meta name='og:description' content={NEXT_PUBLIC_SITE_DESCRIPTION} />
          <meta name='og:image' content={NEXT_PUBLIC_SITE_IMAGE} />

          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='twitterHandle' key='twhandle' />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {NEXT_PUBLIC_GA_ID?.length > 0 && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${NEXT_PUBLIC_GA_ID}', {
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
