function formButton() {
  var x = document.querySelector("aside");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
  }
}
