let treatmentNumber;
let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
// console.log(fibonacci);
treatmentNumber = fibonacci[Math.floor(Math.random() * fibonacci.length)];
// console.log(treatmentNumber);
module.exports = { treatmentNumber };
