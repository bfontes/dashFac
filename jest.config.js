module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.test.js?(x)'],
    setupFilesAfterEnv: ['jest-styled-components'],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',"\\.(jpg)$": "jest-transform-stub"
    },
};
    