const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
  // Your existing module.exports
  poweredByHeader: false,
  images: {
    domains: ['unsplash.com', 'assets.vercel.com'],
  },
}

module.exports = withSentryConfig(moduleExports)
