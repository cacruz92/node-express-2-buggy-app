// jest.setup.js

const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// jest.config.js

console.log('jest.setup.js has been executed');

module.exports = {
    // other configurations...
    setupFiles: ["<rootDir>/jest.setup.js"],
  };
  