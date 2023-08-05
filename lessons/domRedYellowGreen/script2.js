const redDiv = document.getElementById('red');
const yellowDiv = document.getElementById('yellow');
const greenDiv = document.getElementById('green');



const divs = [redDiv, yellowDiv, greenDiv];
squaresClickCounter = { 'red': 0, 'yellow': 0, 'green': 0 }

divs.forEach(div => {
  div.addEventListener('click', function () {
    squaresClickCounter[div.value] += 1;
    div.innerHTML = squaresClickCounter[div.value];
  })
});

const clearButton = document.getElementById('clear-game');
clearButton.addEventListener('click', function () {
  divs.forEach(div => {
    squaresClickCounter[div.value] = 0;
    div.innerHTML = '';
  });
})