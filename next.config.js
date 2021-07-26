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
