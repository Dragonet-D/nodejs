let str = "miaov";
console.log(new Buffer(str));
let bf = new Buffer(str);
console.log(bf.toString('utf-8', 1, 3));
let bf3 = new Buffer("妙味");
console.log(bf3);
console.log(bf3.toString('utf-8', 1));

console.log(bf.toJSON());

const bff = Buffer.from(str);
const bff3 = Buffer.from('妙味');
console.log(bff3.toString('utf-8', 1))