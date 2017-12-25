//  const p1 = document.createElement('p');
//  const p2 = document.createElement('p');
//  const parent = document.querySelector('#content');
//  const firstChild = parent.childNodes[0];


function highlightParas(containing) {
  if(typeof containing === 'string')
    containing = new RegExp(`\\b${containing}\\b`, 'i');
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for(let p of paras) {
    if(!containing.test(p.textContent)) continue;
    p.classList.add('highlight');
  }
}
highlightParas('unique');



//  p1.textContent = "Это было создано динамически!";
//  p2.textContent = "И это было создано динамически тоже!";



//  parent.insertBefore(p1, firstChild);
//  parent.appendChild(p2);