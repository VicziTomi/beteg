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
let ikerPrimes = [];
for (let i = 0; i <= primes.length; i++) {
  if (primes[i + 1] - primes[i] === 2) {
    let temp = [];
    temp.push(primes[i], primes[i + 1]);
    ikerPrimes.push(temp);
  }
}
// console.log(ikerPrimes);
treatmentNumber = ikerPrimes[Math.floor((Math.random() * ikerPrimes.length))];
// console.log(treatmentNumber);
module.exports = { treatmentNumber };
