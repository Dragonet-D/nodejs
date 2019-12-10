const crypto = require('crypto')
const fs = require('fs')

const shasum = crypto.createHash('sha1')
const s = fs.ReadStream('./a.json')

s.on('data', d => {
  shasum.update(d)
})

s.on('end', () => {
  const d = shasum.digest('hex')
  console.log(d)
})