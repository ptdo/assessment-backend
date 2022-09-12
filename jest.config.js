/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/*.{js,ts}'],
  moduleNameMapper: {
    'src/(.*)': '<roorDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src']
};