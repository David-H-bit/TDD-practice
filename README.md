# simple TDD example

A collection of utility functions for string manipulation, calculations, and array analysis. The goal was to use Jest and Babel for TDD (Test Driven Development), so we can test if the code works.

## Features

- **reverseString()** - Reverse any string
- **capitalize()** - Capitalize first letter
- **calculate()** - Basic math operations (+, -, *, /)
- **caesarCipher()** - Encrypt/decrypt text with Caesar cipher
- **analyzeArray()** - Get min, max, average, and length of number arrays

## Installation

```bash
npm install
```

## Usage

```javascript
import { reverseString, capitalize, calculate, caesarCipher, analyzeArray } from './src/';

// Examples
reverseString("hello");           // "olleh"
capitalize("world");             // "World"
calculate(10, 5, "/");          // 2
caesarCipher("hello", 3);       // "khoor"
analyzeArray([1,2,3,4,5]);      // { average: 3, min: 1, max: 5, length: 5 }
```

## Testing

Run tests with Jest:

```bash
npm test
```

## Project Structure

```
├── src/           # Source files
├── test/          # Jest test files
├── package.json
└── babel.config.js
```

Each function is fully tested and uses ES6 modules with Babel for compatibility.