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
 * @type {import('next/dist/server/config').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  target: 'serverless',
  distDir: 'dist',
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  images: {
    loader: 'custom',
    path: '/',
    deviceSizes: [320, 480, 768, 1024, 1280, 1440, 1600, 1920, 2048],
    imageSizes: [320, 480, 768, 1024, 1280, 1440, 1600, 1920, 2048],
  },
  future: {},
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
