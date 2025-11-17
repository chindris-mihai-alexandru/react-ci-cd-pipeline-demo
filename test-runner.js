const sayHi = require('./src/sayHi.js');

console.log('Testing sayHi function...');

// Test 1
const result1 = sayHi('World');
const expected1 = 'Hello World';
console.log(`Test 1: sayHi('World') = '${result1}' (expected: '${expected1}')`);
console.log(`Test 1: ${result1 === expected1 ? 'PASS' : 'FAIL'}`);

// Test 2
const result2 = sayHi('Mike');
const expected2 = 'Hello Mike';
console.log(`Test 2: sayHi('Mike') = '${result2}' (expected: '${expected2}')`);
console.log(`Test 2: ${result2 === expected2 ? 'PASS' : 'FAIL'}`);

console.log('\nAll tests completed!');