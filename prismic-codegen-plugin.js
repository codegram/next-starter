module.exports = {
  plugin: (schema, documents, config) => {
    return `
    export const prismicUrl = '${config.url}';
    `
  },
}
