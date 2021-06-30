const { withSentryConfig } = require('@sentry/nextjs')

// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const nextConfig = {
  // target: 'experimental-serverless-trace',
  // Your existing module.exports
  poweredByHeader: false,
  images: {
    domains: ['unsplash.com', 'assets.vercel.com'],
  },
}
const SentryWebpackPluginOptions = {
  silent: true,
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

const isDevelopment = process.env.NODE_ENV === 'development'

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = isDevelopment
  ? nextConfig
  : withSentryConfig(nextConfig, SentryWebpackPluginOptions)
