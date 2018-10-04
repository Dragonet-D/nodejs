const buf = Buffer.from('buffer');

for (const pair of buf.entries()) {
    console.log(pair);
}

const buff = new Buffer('buffer');

for (const pair of buff.entries()) {
    console.log(pair);
}