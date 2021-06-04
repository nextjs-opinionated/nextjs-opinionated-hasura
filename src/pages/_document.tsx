import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default class MyDocument extends Document {
  render() {
    const SITE_TITLE = 'Next.js Opinionated Hasura'
    const IMAGE_URL = 'https://live.staticflickr.com/5812/30870250385_33729971da_q.jpg'
    const DESCRIPTION = 'Next.js Opinionated Hasura'
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta property='og:title' content={SITE_TITLE} />
          <meta property='twitter:title' content={SITE_TITLE} />
          <meta property='og:description' content={DESCRIPTION} />
          <meta property='twitter:description' content={DESCRIPTION} />
          <meta property='og:image' content={IMAGE_URL} />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:image' content={IMAGE_URL} />
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
