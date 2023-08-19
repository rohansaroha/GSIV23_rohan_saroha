import type {Config} from 'jest';

const config: Config = {
   verbose: true,
   testEnvironment:'jest-environment-jsdom',
   transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
   },
};

export default config;