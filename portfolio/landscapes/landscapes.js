//BOTTONE APERTURA-CHIUSURA GALLERY//
function button(id) {
  if (document.getElementById(id).style.display == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

//CLICK ANTEPRIME IMG//
let antImg = document.querySelectorAll(".anteprime-img");
for (let i = 0; i < antImg.length; i++) {
  antImg[i].addEventListener("click", function () {
    let interval;
    let restart;
    if (i < foto.length + 1) {
      document.getElementById("image").src = antImg[i].src;
      interval = intervalItaly;
      restart = regainItaly;
    } else {
      document.getElementById("imageWorld").src = antImg[i].src;
      interval = intervalWorld;
      restart = regainWorld;
    }

    clearInterval(interval);
    restart();
  });
}

//GALLERIA ITALY//
let foto = [
  "../landscapes/photoLandscape/italy/1.jpg",
  "../landscapes/photoLandscape/italy/2.jpg",
  "../landscapes/photoLandscape/italy/3.jpg",
  "../landscapes/photoLandscape/italy/4.jpg",
  "../landscapes/photoLandscape/italy/5.jpg",
  "../landscapes/photoLandscape/italy/6.jpg",
  "../landscapes/photoLandscape/italy/7.jpg",
  "../landscapes/photoLandscape/italy/8.jpg",
  "../landscapes/photoLandscape/italy/9.jpg",
  "../landscapes/photoLandscape/italy/10.jpg",
  "../landscapes/photoLandscape/italy/11.jpg",
  "../landscapes/photoLandscape/italy/12.jpg",
  "../landscapes/photoLandscape/italy/13.jpg",
  "../landscapes/photoLandscape/italy/14.jpg",
  "../landscapes/photoLandscape/italy/15.jpg",
  "../landscapes/photoLandscape/italy/16.jpg",
  "../landscapes/photoLandscape/italy/17.jpg",
  "../landscapes/photoLandscape/italy/18.jpg",
  "../landscapes/photoLandscape/italy/19.jpg",
  "../landscapes/photoLandscape/italy/20.jpg",
  "../landscapes/photoLandscape/italy/21.jpg",
  "../landscapes/photoLandscape/italy/22.jpg",
  "../landscapes/photoLandscape/italy/23.jpg",
  "../landscapes/photoLandscape/italy/24.jpg",
  "../landscapes/photoLandscape/italy/25.jpg",
  "../landscapes/photoLandscape/italy/26.jpg",
  "../landscapes/photoLandscape/italy/27.jpg",
  "../landscapes/photoLandscape/italy/28.jpg",
  "../landscapes/photoLandscape/italy/29.jpg",
  "../landscapes/photoLandscape/italy/30.jpg",
  "../landscapes/photoLandscape/italy/31.jpg",
  "../landscapes/photoLandscape/italy/32.jpg",
  "../landscapes/photoLandscape/italy/33.jpg",
  "../landscapes/photoLandscape/italy/34.jpg",
  "../landscapes/photoLandscape/italy/35.jpg",
  "../landscapes/photoLandscape/italy/36.jpg",
  "../landscapes/photoLandscape/italy/37.jpg",
  "../landscapes/photoLandscape/italy/38.jpg",
  "../landscapes/photoLandscape/italy/39.jpg",
  "../landscapes/photoLandscape/italy/40.jpg",
  "../landscapes/photoLandscape/italy/41.jpg",
];
var i = 0;

function avantiItaly() {
  if (i < foto.length - 1) i++;
  else i = 0;
  document.getElementById("image").src = foto[i];
  if (i == 3) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}
function indietroItaly() {
  if (i == 0) i = foto.length - 1;
  else i--;
  document.getElementById("image").src = foto[i];
  if (i == 3) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}
//AVANTI GALLERIA AUTO 4 SECONDI//
let intervalItaly = setInterval(avantiItaly, 4000);

$(".arrow").click(function myStopFunction() {
  clearInterval(intervalItaly);
  regainItaly();
});

function regainItaly() {
  intervalItaly = setInterval(avantiItaly, 6000);
}

//GALLERIA WORLD//
//let phWorld = document.getElementById("imageWorld");
const phWorld = [
  "../landscapes/photoLandscape/world/1.jpg",
  "../landscapes/photoLandscape/world/2.jpg",
  "../landscapes/photoLandscape/world/3.jpg",
  "../landscapes/photoLandscape/world/4.jpg",
  "../landscapes/photoLandscape/world/5.jpg",
  "../landscapes/photoLandscape/world/6.jpg",
  "../landscapes/photoLandscape/world/7.jpg",
  "../landscapes/photoLandscape/world/8.jpg",
  "../landscapes/photoLandscape/world/9.jpg",
  "../landscapes/photoLandscape/world/10.jpg",
  "../landscapes/photoLandscape/world/11.jpg",
  "../landscapes/photoLandscape/world/12.jpg",
  "../landscapes/photoLandscape/world/13.jpg",
  "../landscapes/photoLandscape/world/14.jpg",
  "../landscapes/photoLandscape/world/15.jpg",
  "../landscapes/photoLandscape/world/16.jpg",
  "../landscapes/photoLandscape/world/17.jpg",
  "../landscapes/photoLandscape/world/18.jpg",
  "../landscapes/photoLandscape/world/19.jpg",
  "../landscapes/photoLandscape/world/20.jpg",
  "../landscapes/photoLandscape/world/21.jpg",
  "../landscapes/photoLandscape/world/22.jpg",
  "../landscapes/photoLandscape/world/23.jpg",
];
var index = 0;

function avantiWorld() {
  if (index < phWorld.length - 1) index++;
  else index = 0;
  document.getElementById("imageWorld").src = phWorld[index];
}
function indietroWorld() {
  if (index == 0) index = phWorld.length - 1;
  else index--;
  document.getElementById("imageWorld").src = phWorld[index];
}

//AVANTI GALLERIA AUTO 4 SECONDI//
let intervalWorld = setInterval(avantiWorld, 4000);
$(".arrow").click(function myStopFunction() {
  clearInterval(intervalWorld);
  regainWorld();
});

function regainWorld() {
  intervalWorld = setInterval(avantiWorld, 6000);
}

/*PROVA ZOOM
function zoom(elem){
   var a = document.getElementsByClassName('class-anteprime');
   for (i = 0; i < a.length; i++) {
      a[i].classList.remove('active')
  }
  elem.classList.add('active');
}*/

/*EFFWTTO SWIPE WORLD*/
document
  .getElementById("imageWorld")
  .addEventListener("touchstart", handleTouchStartWorld);

document
  .getElementById("imageWorld")
  .addEventListener("touchend", handleTouchEndWorld);

let xTouchStartWorld;

function handleTouchStartWorld(evt) {
  xTouchStartWorld = evt.touches[0].clientX;
}

function handleTouchEndWorld(evt) {
  if (!xTouchStartWorld) {
    return;
  }

  let xTouchEndWorld = evt.changedTouches[0].clientX;

  let xDiff = xTouchStartWorld - xTouchEndWorld;
  console.log("xDiff", xDiff);

  if (xDiff > 30) {
    indietroWorld();
    clearInterval(intervalWorld);
    regainWorld();
  } else if (xDiff < -30) {
    avantiWorld();
    clearInterval(intervalWorld);
    regainWorld();
  }
}

/*EFFETTO SWIPE ITALY*/
document
  .getElementById("image")
  .addEventListener("touchstart", handleTouchStartItaly);

document
  .getElementById("image")
  .addEventListener("touchend", handleTouchEndItaly);

let xTouchStartItaly;

function handleTouchStartItaly(evt) {
  xTouchStartItaly = evt.touches[0].clientX;
}

function handleTouchEndItaly(evt) {
  if (!xTouchStartItaly) {
    return;
  }

  let xTouchEndItaly = evt.changedTouches[0].clientX;

  let xDiff = xTouchStartItaly - xTouchEndItaly;
  console.log("xDiff", xDiff);

  if (xDiff > 30) {
    indietroItaly();
    clearInterval(intervalItaly);
    regainItaly();
  } else if (xDiff < -30) {
    avantiItaly();
    clearInterval(intervalItaly);
    regainItaly();
  }
}

/*FUNZIONE AGG. CLASSE X IMG VERTICALI
function imgVerticale(imgIndex) {
  if (imgIndex == 1 || imgIndex == 4 || imgIndex == 5 || imgIndex == 3) {
    document.getElementById("image").classList.add("imgVertical");
  } else {
    document.getElementById("image").classList.remove("imgVertical");
  }
}*/
