function drawGame(tiles, isNew) {
  var tileContainer = document.getElementById('tile-container');
  for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i];
    if (tile) {
      if (isNew) {
        (function () {
          var tileDiv = document.createElement('div');
          positionTile(tile, tileDiv);
          tileDiv.classList.add('tile', 'tile--' + tile.value);
          tileDiv.id = tile.id;
          setTimeout(function () {
            tileDiv.classList.add("tile--pop");
          }, tile.mergedIds ? 1 : 150);
          tileDiv.innerHTML = '<p>' + tile.value + '</p>';
          tileContainer.appendChild(tileDiv);
        })();
      } else {
        var currentElement = document.getElementById(tile.id);
        positionTile(tile, currentElement);
      }
    }
  }
}

function gameOver() {
  if (game.filter(function (number) {
    return number === null;
  }).length === 0) {
    var sameNeighbors = game.find(function (tile, i) {
      var isRightSame = game[i + 1] && (i + 1) % 4 !== 0 ? tile.value === game[i + 1].value : false;
      var isDownSame = game[i + 4] ? tile.value === game[i + 4].value : false;
      if (isRightSame || isDownSame) {
        return true;
      }
      return false;
    });
    return !sameNeighbors;
  }
}