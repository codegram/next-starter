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

const basePath = process.env.BASE_PATH || ''

/**
 * @type {import('next/dist/server/config').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  target: 'serverless',
  distDir: 'dist',
  basePath,
  env: {
    basePath: process.env.BASE_PATH,
  },
  images: {
    loader: 'custom',
    path: basePath,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
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
