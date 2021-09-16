module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      numberOfRuns: 5,
      url: ['http://localhost:5000'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'uses-text-compression': 'off',
        'csp-xss': 'off',
        interactive: [
          'error',
          { minScore: 0.7, aggregationMethod: 'optimistic' },
        ],
        'unused-css-rules': 'off',
        'unused-javascript': 'off',
        'legacy-javascript': 'off',
        'color-contrast': 'off',
        'mainthread-work-breakdown': ['error', { minScore: 0.75 }],
        'max-potential-fid': [
          'warn',
          { minScore: 0.3, aggregationMethod: 'optimistic' },
        ],
        'image-size-responsive': ['warn', { minScore: 0.9 }],
        'largest-contentful-paint': [
          'warn',
          { minScore: 0.5, aggregationMethod: 'optimistic' },
        ],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: 'lighthouse-report',
    },
  },
}
