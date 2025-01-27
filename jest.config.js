/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects: ['<rootDir>/pkg/*'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'jest.results.json',
      usePathForSuiteName: true,
      ancestorSeparator: ' › ',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}'
    }]
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.js' }]
  },
  moduleNameMapper: {
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src',
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^(\\.{1,2}/.*)\\.ts$': '$1'
  },
  rootDir: '.',
  roots: ['<rootDir>/pkg'],
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol|@ethersproject|ethers)/)'
  ],
  moduleDirectories: ['node_modules', 'src', 'pkg'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
