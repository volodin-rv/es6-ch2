'use strict';

//  const p1 = document.createElement('p');
//  const p2 = document.createElement('p');
//  const parent = document.querySelector('#content');
//  const firstChild = parent.childNodes[0];


function highlightParas(containing) {
  if (typeof containing === 'string') containing = new RegExp('\\b' + containing + '\\b', 'i');
  var paras = document.getElementsByTagName('p');
  console.log(paras);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = paras[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var p = _step.value;

      if (!containing.test(p.textContent)) continue;
      p.classList.add('highlight');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
highlightParas('unique');

//  p1.textContent = "Это было создано динамически!";
//  p2.textContent = "И это было создано динамически тоже!";


//  parent.insertBefore(p1, firstChild);
//  parent.appendChild(p2);