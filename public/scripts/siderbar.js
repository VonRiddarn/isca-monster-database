document.querySelector("main");

let isShown = null;

function showBtn() {
  document.querySelector("aside").style.width = "250 px";
  isShown = true;
  console.log(isShown);
}

function hideBtn() {
  document.querySelector("aside").style.width = "0px";
  isShown = false;
  console.log(isShown);
}

const button = document.querySelector(".hamburger");

function myFunction() {
  var x = document.querySelector("aside");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
