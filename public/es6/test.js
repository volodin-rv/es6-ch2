'use strict';
//средство еs6: блок "левых " объявлений
const sentences = [
  {subject: 'Ecmascript', verd: 'is', object: 'easy'},
  {subject: 'Mouses', verd: 'are', object: 'small'}
];

//средство еs6: деструктуризация объекта
function say({subject, verb, object}) {
  //средство еs6: строки шаблона
  console.log ('${subject} ${verb} ${object}');
}

//средство es6: for..in
for(let s of sentences) {
  say(s);
}