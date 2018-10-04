let bf = new Buffer("miaov");
console.log(bf);

let bf3 = bf.slice(2, 4);
console.log(bf3);
bf3[0] = 10;
console.log(bf3);
console.log(bf);

let bff = new Buffer("miaov");
let bfff = new Buffer(10);
bfff.copy(bff);
console.log(bff);