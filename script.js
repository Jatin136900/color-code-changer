let box = document.getElementById("parents");
let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = color;
  para.textContent = color;
});
