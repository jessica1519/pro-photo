//BOTTONE APERTURA-CHIUSURA GALLERY - BOTTONE PORTFOLIO//
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
  "../animals/photoAnimals/1.jpg",
  "../animals/photoAnimals/2.jpg",
  "../animals/photoAnimals/3.jpg",
  "../animals/photoAnimals/4.jpg",
  "../animals/photoAnimals/5.jpg",
  "../animals/photoAnimals/6.jpg",
  "../animals/photoAnimals/7.jpg",
  "../animals/photoAnimals/8.JPG",
  "../animals/photoAnimals/9.JPG",
  "../animals/photoAnimals/10.jpg",
  "../animals/photoAnimals/11.jpg",
  "../animals/photoAnimals/12.JPG",
  "../animals/photoAnimals/13.jpg",
  "../animals/photoAnimals/14.jpg",
  "../animals/photoAnimals/15.jpg",
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
    imgIndex == 3 ||
    imgIndex == 9 ||
    imgIndex == 10 ||
    imgIndex == 13 ||
    imgIndex == 14
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
