'use strict';
//средство еs6: блок 'левых' объявлений

var sentences = [{ subject: 'Javascript', verd: 'is', object: 'great' }, { subject: 'Elephants', verd: 'are', object: 'large' }];
//средство еs6: деструктуризация объекта
function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  //средство еs6: строки шаблона
  console.log('${subject} ${verb} ${object}');
}
//средство es6: for..in
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
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