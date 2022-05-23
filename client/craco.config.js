const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/data': path.resolve(__dirname, 'src/data/'),
      '@/hooks': path.resolve(__dirname, 'src/hooks/'),
      '@/layouts': path.resolve(__dirname, 'src/layouts/'),
      '@/pages': path.resolve(__dirname, 'src/pages/'),
      '@/routes': path.resolve(__dirname, 'src/routes/'),
      '@/services': path.resolve(__dirname, 'src/services/'),
      '@/styles': path.resolve(__dirname, 'src/styles/'),
      '@/utils': path.resolve(__dirname, 'src/utils/'),
      '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
    },
  },
  babel: {
    loaderOptions: {
      babelrc: true,
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@/components/(.*)': '<rootDir>/components/$1',
        '@/data/(.*)': '<rootDir>/data/$1',
        '@/hooks/(.*)': '<rootDir>/hooks/$1',
        '@/layouts/(.*)': '<rootDir>/layouts/$1',
        '@/pages/(.*)': '<rootDir>/pages/$1',
        '@/routes/(.*)': '<rootDir>/routes/$1',
        '@/services/(.*)': '<rootDir>/services/$1',
        '@/styles/(.*)': '<rootDir>/styles/$1',
        '@/utils/(.*)': '<rootDir>/utils/$1',
      },
    },
  },
}
