const squares = document.querySelectorAll('.colorSquare');
const clearButton = document.getElementById('clear-game');
let squaresScore = {
  'red': 0, 'yellow': 0, 'green': 0,
}
// redDiv.onclick = () => console.log('You clicked red');
// yellowDiv.onclick = () => console.log('You clicked yellow');
// greenDiv.onclick = () => console.log('You clicked green');

// ARROW FUCTIONS
numberOnClick = () => {
  squares.forEach((square) => {
    square.onclick = () => {
      squaresScore[square.value] += 1;
      square.innerHTML = squaresScore[square.value];
    };
  });
}

clearGame = () => {
  clearButton.onclick = () => {
    squares.forEach(square => {
      squaresScore[square.value] = 0;
      square.innerHTML = '';
    })
  }
}

numberOnClick();
clearGame();