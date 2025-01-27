/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: ['<rootDir>/pkg/*'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results',
      outputName: 'jest.results.json',
      usePathForSuiteName: true
    }]
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        allowJs: true,
        esModuleInterop: true,
        moduleResolution: 'node',
        module: 'commonjs',
        jsx: 'react',
        target: 'es2020'
      }
    }]
  },
  moduleNameMapper: {
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@cowprotocol)/)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
};
