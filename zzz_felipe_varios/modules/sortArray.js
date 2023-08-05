sortArray = (array) => {
  // console.log(array);
  do {
    // console.log('reseteo de truth')
    arrayTruth = [];
    // console.log('original = ' + array);
    for (const index in array) {
      // console.log(array);
      if ((array[Number(index) + 1]) == undefined) {
        // console.log("undefined");
        break;
      } else {
        // console.log(`round = ${index}`);

        // console.log(`${array[Number(index)]} > ${array[Number(index) + 1]} ? => ${array[Number(index)] > array[Number(index) + 1]}`);
        if (array[Number(index)] > array[Number(index) + 1]) {
          // console.log('swap!')
          let temp = array[Number(index)];
          array[Number(index)] = array[Number(index) + 1];
          array[Number(index) + 1] = temp;

          // console.log(array);
        }
        // console.log('=======================================================');
      }
    }

    for (const index in array) {
      arrayTruth.push(array[Number(index)] > array[Number(index) + 1]);
    }
    // console.log(arrayTruth);
    // console.log(arrayTruth.includes(true));
  } while (arrayTruth.includes(true));
  return array;
}

// module.exports = {
//   sortArray: sortArray()
// }

// console.log(sortArray([5559, 1, 5, 2, 9, 5, 5, 2, 2, 5, 4, 444,]));