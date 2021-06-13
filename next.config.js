// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 * */
const nextConfig = {
  /* config options here */
  experimental: {},
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "mixins"; @import "variables";`,
  },
}

module.exports = nextConfig
