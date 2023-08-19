//BOTTONE APERTURA-CHIUSURA GALLERY//
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

//GALLERIA FOTO//
const foto = [
  "../drone/dronePhoto/1.jpg",
  "../drone/dronePhoto/2.jpg",
  "../drone/dronePhoto/3.jpg",
  "../drone/dronePhoto/4.jpg",
  "../drone/dronePhoto/5.jpg",
  "../drone/dronePhoto/6.jpg",
  "../drone/dronePhoto/7.jpg",
  "../drone/dronePhoto/8.jpg",
  "../drone/dronePhoto/9.jpg",
  "../drone/dronePhoto/10.jpg",
];

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
  /*imgVerticale(i);*/
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
  /*imgVerticale(i);*/
}

/*FUNZIONE AGG. CLASSE X IMG VERTICALI
function imgVerticale(imgIndex) {
  if (imgIndex == 3 || imgIndex == 6 || imgIndex == 9 || imgIndex == 10) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}*/

//AVANTI GALLERIA AUTO 4 SECONDI//
let myInterval = setInterval(avantiArrow, 4000);
$(".arrow").click(function myStopFunction() {
  clearInterval(myInterval);
  regain();
});

function regain() {
  myInterval = setInterval(avantiArrow, 4000);
}

//CLICK ANTEPRIME IMG//
let antImg = document.querySelectorAll(".anteprime-img");
for (let index = 0; index < antImg.length; index++) {
  antImg[index].addEventListener("click", function () {
    document.getElementById("image").src = antImg[index].src;
    /* imgVerticale(index);*/
    clearInterval(myInterval);
    regain();
  });
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
    avantiArrow();
    clearInterval(myInterval);
    regain();
  } else if (xDiff < -30) {
    indietroArrow();
    clearInterval(myInterval);
    regain();
  }
}
