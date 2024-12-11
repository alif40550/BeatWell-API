/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|ts|tsx)$': ['ts-jest', {}],
  },
  // setupFilesAfterEnv: ['<rootDir>/test/setupMocks.ts'],
};
