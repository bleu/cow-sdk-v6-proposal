import '@testing-library/jest-dom'
import 'jest-fetch-mock'

// Mock console.warn to reduce noise in test output
const originalWarn = console.warn
beforeAll(() => {
  console.warn = jest.fn()
})

afterAll(() => {
  console.warn = originalWarn
})
