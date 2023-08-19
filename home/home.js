var foto = new Array();
foto[0] = "../home/homePhoto/1.jpg";
foto[1] = "../home/homePhoto/2.jpg";
foto[2] = "../home/homePhoto/3.jpg";
foto[3] = "../home/homePhoto/4.jpg";
foto[4] = "../home/homePhoto/5.jpg";
foto[5] = "../home/homePhoto/6.jpg";
foto[6] = "../home/homePhoto/7.jpg";
foto[7] = "../home/homePhoto/8.jpg";
foto[8] = "../home/homePhoto/9.jpg";
foto[9] = "../home/homePhoto/10.jpg";
foto[10] = "../home/homePhoto/11.jpg";
foto[11] = "../home/homePhoto/12.jpg";
foto[12] = "../home/homePhoto/13.jpg";
foto[13] = "../home/homePhoto/14.jpg";
foto[14] = "../home/homePhoto/15.jpg";
foto[15] = "../home/homePhoto/16.jpg";
foto[16] = "../home/homePhoto/17.jpg";
foto[17] = "../home/homePhoto/18.jpg";
foto[18] = "../home/homePhoto/19.jpg";
foto[19] = "../home/homePhoto/20.jpg";
foto[20] = "../home/homePhoto/21.jpg";
foto[21] = "../home/homePhoto/22.jpg";
foto[22] = "../home/homePhoto/23.jpg";
foto[23] = "../home/homePhoto/24.jpg";
foto[24] = "../home/homePhoto/25.jpg";
foto[25] = "../home/homePhoto/26.jpg";
foto[26] = "../home/homePhoto/27.jpg";
foto[27] = "../home/homePhoto/28.jpg";

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
}

//AVANTI GALLERIA AUTO 4 SECONDI//
let myInterval = setInterval(avantiArrow, 4000);
$(".arrow").click(function myStopFunction() {
  clearInterval(myInterval);
  regain();
});

function regain() {
  myInterval = setInterval(avantiArrow, 4000);
}

/*BOTTONE PORTFOLIO*/
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

/*EFFWTTO SWIPE*/
document
  .getElementById("image")
  .addEventListener("touchstart", handleTouchStart);

document.getElementById("image").addEventListener("touchend", handleTouchEnd);

let xTouchStart;

function handleTouchStart(evt) {
  xTouchStart = evt.touches[0].clientX;
}

function handleTouchEnd(evt) {
  if (!xTouchStart) {
    return;
  }

  let xTouchEnd = evt.changedTouches[0].clientX;

  let xDiff = xTouchStart - xTouchEnd;
  console.log("xDiff", xDiff);

  if (xDiff > 30) {
    indietroArrow();
    clearInterval(myInterval);
    regain();
  } else if (xDiff < -30) {
    avantiArrow();
    clearInterval(myInterval);
    regain();
  }
}
