let hum = document.getElementById("hum");
let links = document.getElementById("links");

hum.onclick = function () {
  hum.classList.toggle("active");
  links.classList.toggle("tra");
}
