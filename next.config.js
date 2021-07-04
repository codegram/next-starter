// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  target: 'serverless',
  distDir: 'dist',
  experimental: {},
  future: {
    webpack5: false,
  },
  sassOptions: {
    prependData: `@import "styles/variables"; @import "styles/mixins";`,
  },
}

module.exports = nextConfig
