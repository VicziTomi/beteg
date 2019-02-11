let treatmnetNumber;
while (treatmnetNumber % 3 !== 0 || treatmnetNumber % 4 === 0) {
  treatmnetNumber = Math.floor((Math.random() * 100) + 1);
}
module.exports = { treatmnetNumber };
