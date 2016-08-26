console.log('I am inside a module')

// example export patterns
// https://github.com/substack/browserify-handbook#exports

// module.exports = function () {
//   console.log('whatever')
// }

// module.exports = 'whatever'

// module.exports = {
//   hello: 'world'
// }

// module.exports.hello = 'world'

// BAD:
// exports = function () { return 'BAD' }
// exports = 'VERY BAD'

// ALSO BAD:
// function bad () { return 'BAD'}
// exports = bad

// FINE but avoid:

// exports.hello = 'world'
// exports.foo = function () { return 'bar'}
// exports = module.exports = function () { return 'ok' }

// tl;dr just use module.exports
