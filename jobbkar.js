let treatmnetNumber;
while (treatmnetNumber % 5 !== 0 || treatmnetNumber % 7 === 0) {
  treatmnetNumber = Math.floor((Math.random() * 100) + 1);
}
module.exports = { treatmnetNumber };
