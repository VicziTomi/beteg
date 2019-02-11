let treatmentNumber;
let primes = [];
for (let i = 2; i <= 100; i++) {
  let notPrime = false;
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j !== i) {
      notPrime = true;
    }
  }
  if (notPrime === false) {
    primes.push(i);
  }
}
// console.log(primes.length);
treatmentNumber = primes[Math.floor((Math.random() * primes.length))];
// console.log(treatmentNumber);
module.exports = { treatmentNumber };
