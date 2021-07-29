// @ts-check

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'unsafe-inline' 'unsafe-eval' 'self'; img-src 'unsafe-inline' 'self' data:;",
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  target: 'serverless',
  distDir: 'dist',
  experimental: {},
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  future: {},
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  sassOptions: {
    prependData: `@import "styles/variables"; @import "styles/mixins";`,
  },
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })
    return cfg
  },
}

module.exports = nextConfig
