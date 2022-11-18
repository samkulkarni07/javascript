const colors = [
  "red",
  "rgb(201, 76, 76)",
  "green",
  "yellow",
  "#ccc",
  "coral",
  "#92a8d1",
  "hsl(89, 43%, 51%)",
];

const btn = document.getElementById("btn");
// const text= document.querySelector(".text");

btn.addEventListener("click", function () {
  const randomNumber = getRandoNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  text.textContent = colors[randomNumber];
});

function getRandoNumber() {
  return Math.floor(Math.random() * colors.length);
}
