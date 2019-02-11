const fej = require('./fej');
const jobbkar = require('./jobbkar');
const balkar = require('./balkar');
const torzo = require('./torzo');
const ballab = require('./ballab');
const jobblab = require('./jobblab');
let readline = require('readline-sync');

let Name = readline.question('Hogy hívnak? ');
console.log('Hello, ' + Name + '!');

let sickness = ['Fej', 'Jobbkar', 'Balkar', 'Torzó', 'Balláb', 'Jobbláb'];
let index = readline.keyInSelect(sickness, 'Mi fáj? ');

function treatment (index) {
  switch (index) {
    case 0:
      console.log('A gyógyítószámod: ', fej.treatmnetNumber);
      break;
    case 1:
      console.log('A gyógyítószámod: ', jobbkar.treatmnetNumber);
      break;
    case 2:
      console.log('A gyógyítószámod: ', balkar.treatmentNumber);
      break;
    case 3:
      console.log('A gyógyítószámod: ', torzo.treatmentNumber);
      break;
    case 4:
      console.log('A gyógyítószámod: ', ballab.treatmentNumber);
      break;
    case 5:
      console.log('A gyógyítószámod: ', jobblab.treatmentNumber);
      break;
  }
}
treatment(index);
