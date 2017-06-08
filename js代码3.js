function generateNewNumber() {
  // 0.9 probability of 2, 0.1 probability of 4
  var p = Math.random() * 100;
  return p <= 90 ? 2 : 4;
}

function addRandomNumber() {
  // Adds either a 2 or a 4 to an empty position in the game array
  var emptyCells = game.map(function (_, index) {
    return index;
  }).filter(function (index) {
    return game[index] === null;
  });
  if (emptyCells.length === 0) {
    return;
  }
  var newPos = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  var newObj = {
    id: nextId++,
    index: newPos,
    value: generateNewNumber()
  };
  game.splice(newPos, 1, newObj);
}

function getIndexForPoint(x, y) {
  return y * size + x;
}

function reflectGrid(grid) {
  var reflectedGame = Array(size * size).fill(0);
  for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
      var index1 = getIndexForPoint(col, row);
      var index2 = getIndexForPoint(size - col - 1, row);
      reflectedGame[index1] = grid[index2];
    }
  }
  return reflectedGame;
}

function rotateLeft90Deg(grid) {
  var rotatedGame = Array(size * size).fill(0);
  for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
      var index1 = getIndexForPoint(col, row);
      var index2 = getIndexForPoint(size - 1 - row, col);
      rotatedGame[index1] = grid[index2];
    }
  }
  return rotatedGame;
}

function rotateRight90Deg(grid) {
  var rotatedGame = Array(size * size).fill(0);
  for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
      var index1 = getIndexForPoint(col, row);
      var index2 = getIndexForPoint(row, size - 1 - col);
      rotatedGame[index1] = grid[index2];
    }
  }
  return rotatedGame;
}