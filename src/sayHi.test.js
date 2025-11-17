const sayHi = require('./sayHi.js')

test("Says 'Hello World' when 'World' is passed", () => {
   expect(sayHi('World')).toBe('Hello World')
})