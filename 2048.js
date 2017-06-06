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

function removeElements(mergedTiles) {
    for (var _iterator = mergedTiles, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var tile = _ref;

        var _loop = function _loop() {
            if (_isArray2) {
                if (_i2 >= _iterator2.length) return 'break';
                _ref2 = _iterator2[_i2++];
            } else {
                _i2 = _iterator2.next();
                if (_i2.done) return 'break';
                _ref2 = _i2.value;
            }

            var id = _ref2;

            var currentElm = document.getElementById(id);
            positionTile(tile, currentElm);
            currentElm.classList.add('tile--shrink');
            setTimeout(function () {
                currentElm.remove();
            }, 100);
        };

        for (var _iterator2 = tile.mergedIds, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            var _ret = _loop();

            if (_ret === 'break') break;
        }
    }
}