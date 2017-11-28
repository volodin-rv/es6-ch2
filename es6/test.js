'use strict';
//средство еs6: блок 'левых' объявлений
const sentences = [
  {subject: 'Javascript', verd: 'is', object: 'great'},
  {subject: 'Elephants', verd: 'are', object: 'large'}
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
