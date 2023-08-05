// // const elements = 35;
// // const max = 50

randomNumbersArrays = (elements, max) => {
  let numbers = [];
  const signs = [1, -1];

  for (let min = 0; min < elements; min++) {
    randomSign = signs[Math.floor(Math.random() * signs.length)];

    e = Math.floor(Math.random() * max);
    numbers.push(e * randomSign);
  }
  return numbers;
}
// console.log(randomNumbersArrays(10, 100));

// module.exports = {
//   randomNumbersArrays: randomNumbersArrays()
// }