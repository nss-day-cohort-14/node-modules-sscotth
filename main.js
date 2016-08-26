const { createReadStream } = require('fs')
const transformer = require('./transformer')

createReadStream('README.md')
  .pipe(transformer)
  .pipe(process.stdout)
