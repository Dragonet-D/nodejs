const { PassThrough, Writable } = require('stream');

const pass = new PassThrough();
const writable = new Writable();

pass.pipe(writable);
pass.unpipe(writable);

pass.on('data', (chunk) => { console.log(chunk.toString()) });
pass.write('ok');
pass.resume();
