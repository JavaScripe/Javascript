/**
 * Created by Administrator on 2017/6/5.
 */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var game = null;
var bestScore = 0;
var scoreDiv = document.getElementById('score');
var bestScoreDiv = document.getElementById('bestScore');
var addDiv = document.getElementById('add');
var endDiv = document.getElementById('end');
var size = 4;
var nextId = 1;
var score = 0;

function initGame() {
    game = Array(size * size).fill(null); // 4 x 4 grid, represented as an array
    initBestScore();
}
function updateDOM(before, after) {
    var newElements = getNewElementsDOM(before, after);
    var existingElements = getExistingElementsDOM(before, after);
    var mergedTiles = getMergedTiles(after);
    removeElements(mergedTiles);
    drawGame(newElements, true);
    drawGame(existingElements);
}