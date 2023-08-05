test = [
  { id: 40, name: 'JavaScript' },
  { id: 40, name: 'push' },
  { id: 40, name: 'Array' },
];

onlyNames = (array) => {
  new_array = [];

  array.forEach(obj => {
    new_array.push(obj['name']);
  })
  return new_array;
};

console.log(onlyNames(test));