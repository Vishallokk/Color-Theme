 const red = document.getElementById("box");
 const brown = document.getElementById("box1");
 const grey = document.getElementById("box2");
 const green = document.getElementById("box3");
 const body = document.querySelector("body")


 red.addEventListener('click',() => {
  body.style.backgroundColor = "red"
 });

 brown.addEventListener('click',() => {
  body.style.backgroundColor = "brown"
 });

 grey.addEventListener('click',() => {
  body.style.backgroundColor = "grey"
 });

 green.addEventListener('click',() => {
  body.style.backgroundColor = "green"
 });