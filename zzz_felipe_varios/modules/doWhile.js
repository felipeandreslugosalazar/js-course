
array = [false, false, false, false, false, false, false, false];

do {
  array[Math.floor(Math.random() * array.length)] = true;
  console.log(array);

} while (array.includes(false));