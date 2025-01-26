module.exports = {
  testMatch: [
    '<rootDir>/pkg/**/__tests__/**/*.test.[jt]s?(x)',
    '<rootDir>/pkg/**/*.spec.[jt]s?(x)',
    '<rootDir>/pkg/**/*.test.[jt]s?(x)'
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2020',
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
            dynamicImport: true
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true
          }
        }
      }
    ]
  },
  moduleNameMapper: {
    '^@cowprotocol/(.*)$': '<rootDir>/pkg/$1/src'
  },
  collectCoverageFrom: [
    'pkg/**/src/**/*.{ts,tsx}',
    '!pkg/**/src/**/*.d.ts',
    '!pkg/**/src/**/index.ts',
    '!pkg/**/src/**/*.stories.{ts,tsx}'
  ],
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80
    }
  }
}
