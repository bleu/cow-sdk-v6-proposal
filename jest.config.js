/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testMatch: ['<rootDir>/pkg/**/*.spec.ts', '<rootDir>/pkg/**/*.test.ts'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { 
      configFile: './babel.config.js'
    }]
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@cowprotocol/common/(.*)$': '<rootDir>/pkg/cow-common/src/$1',
    '^@cowprotocol/order-book/(.*)$': '<rootDir>/pkg/cow-order-book/src/$1',
    '^@cowprotocol/order-signing/(.*)$': '<rootDir>/pkg/cow-order-signing/src/$1',
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src',
    '^src/(.*)$': '<rootDir>/pkg/cow-order-book/src/$1',
    '\\.\\./common/(.*)$': '<rootDir>/pkg/cow-common/src/$1',
    '\\.\\./order-book$': '<rootDir>/pkg/cow-order-book/src',
    '\\.\\./order-signing$': '<rootDir>/pkg/cow-order-signing/src',
    '\\.\\./utils$': '<rootDir>/pkg/cow-composable/src/utils',
    '\\.\\./api$': '<rootDir>/pkg/cow-order-book/src/api'
  },
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'jest.results.json'
    }]
  ],
  rootDir: '.',
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol|@ethersproject|ethers|web3|bn\.js|hash\.js|elliptic|lodash-es)/)'
  ],
  moduleDirectories: ['node_modules', 'src', 'pkg'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
