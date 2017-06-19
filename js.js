var theCounter = document.getElementById('counter');
var number = 0;

function counter() {
  if (number <= 99) {
    number++;
    theCounter.innerHTML = number;

  }
  else {
    clearInterval(beginCounter);
  }
}
var beginCounter = setInterval(counter, 100);
