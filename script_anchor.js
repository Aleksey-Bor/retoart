"use script";


var elemToggle = document.getElementById('Toggle');
console.log (elemToggle);

elemToggle.addEventListener('click', colorTransferAnchor, false);

function colorTransferAnchor () {
  var anchor = window.location.href;
  console.log(typeof (anchor));
  console.log (anchor);
  if (anchor == window.location.href ) {
  var elemStartP = document.getElementById('StartP');
  elemStartP.style.color = '#FFDD01';
  }

} 

