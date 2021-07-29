/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch')

const repoName = 'codegram-demo'

const url = `https://${repoName}.cdn.prismic.io/graphql`

const reference = fetch(`https://${repoName}.cdn.prismic.io/api/v2`)
  .then((res) => res.json())
  .then((data) => data.refs.find((ref) => ref.id === 'master').ref)

module.exports = reference.then((ref) => ({
  overwrite: true,
  schema: [
    {
      [url]: {
        method: 'GET',
        headers: {
          'Prismic-Ref': ref,
        },
      },
    },
  ],
  documents: 'pages/**/*.graphql',
  generates: {
    'graphql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typescript-react-apollo': {
            withHooks: false,
            withHOC: false,
          },
        },
        { 'prismic-codegen-plugin.js': { ref, url } },
      ],
    },
    './graphql/schema.json': {
      plugins: ['introspection'],
    },
  },
}))
