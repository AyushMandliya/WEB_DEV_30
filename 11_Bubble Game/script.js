var score = 0;

function increaseScore() {
  document.querySelector("#scoreval").textContent = score;
  score += 10;
}

var hitrnd = 0;

function getNewHit() {
  hitrnd = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrnd;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 119; i++) {
    var rnd = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rnd}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  //alert("chal raha hai boss");
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrnd) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
increaseScore();
