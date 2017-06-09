function shiftGameRight(gameGrid) {
  // reflect game grid
  var reflectedGame = reflectGrid(gameGrid);
  // shift left
  reflectedGame = shiftGameLeft(reflectedGame);
  // reflect back
  return reflectGrid(reflectedGame);
}

function shiftGameLeft(gameGrid) {
  var newGameState = [];
  var totalAdd = 0;
  // for rows
  for (var i = 0; i < size; i++) {
    // for columns
    var firstPos = size * i;
    var lastPos = size + size * i;
    var currentRow = gameGrid.slice(firstPos, lastPos);
    var filteredRow = currentRow.filter(function (row) {
      return row;
    });
    for (var _iterator3 = filteredRow, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var row = _ref3;

      delete row.mergedIds;
    }

    for (var j = 0; j < filteredRow.length - 1; j++) {
      if (filteredRow[j].value === filteredRow[j + 1].value) {
        var sum = filteredRow[j].value * 2;
        filteredRow[j] = {
          id: nextId++,
          mergedIds: [filteredRow[j].id, filteredRow[j + 1].id],
          value: sum
        };
        filteredRow.splice(j + 1, 1);
        score += sum;
        totalAdd += sum;
      }
    }
    while (filteredRow.length < size) {
      filteredRow.push(null);
    };
    newGameState = [].concat(newGameState, filteredRow);
  }

  if (totalAdd > 0) {
    scoreDiv.innerHTML = score;
    addDiv.innerHTML = '+' + totalAdd;
    addDiv.classList.add('active');
    setTimeout(function () {
      addDiv.classList.remove("active");
    }, 800);
    if (score > bestScore) {
      localStorage.setItem('bestScore', score);
      initBestScore();
    }
  }
  return newGameState;
}