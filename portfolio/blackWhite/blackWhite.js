//BOTTONE APERTURA-CHIUSURA GALLERY//
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

//GALLERIA FOTO//
let foto = document.getElementById("image");
foto = [
  "../blackWhite/photoBlackWhite/1.jpg",
  "../blackWhite/photoBlackWhite/2.jpg",
  "../blackWhite/photoBlackWhite/3.jpg",
  "../blackWhite/photoBlackWhite/4.jpg",
  "../blackWhite/photoBlackWhite/5.jpg",
  "../blackWhite/photoBlackWhite/6.jpg",
  "../blackWhite/photoBlackWhite/7.jpg",
  "../blackWhite/photoBlackWhite/8.JPG",
  "../blackWhite/photoBlackWhite/9.JPG",
  "../blackWhite/photoBlackWhite/10.jpg",
  "../blackWhite/photoBlackWhite/11.jpg",
  "../blackWhite/photoBlackWhite/12.JPG",
  "../blackWhite/photoBlackWhite/13.jpg",
  "../blackWhite/photoBlackWhite/14.jpg",
  "../blackWhite/photoBlackWhite/15.jpg",
];

var i = 0;

function avantiArrow() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
  imgVerticale(i);
}
function indietroArrow() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
  imgVerticale(i);
}

/*FUNZIONE AGG. CLASSE X IMG VERTICALI*/
function imgVerticale(imgIndex) {
  if (
    imgIndex == 2 ||
    imgIndex == 8 ||
    imgIndex == 9 ||
    imgIndex == 10 ||
    imgIndex == 11 ||
    imgIndex == 12 ||
    imgIndex == 13
  ) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
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

//CLICK ANTEPRIME IMG//
let antImg = document.querySelectorAll(".anteprime-img");
for (let index = 0; index < antImg.length; index++) {
  antImg[index].addEventListener("click", function () {
    document.getElementById("image").src = antImg[index].src;
    imgVerticale(index);
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
    indietroArrow();
    clearInterval(myInterval);
    regain();
  } else if (xDiff < -30) {
    avantiArrow();
    clearInterval(myInterval);
    regain();
  }
}
