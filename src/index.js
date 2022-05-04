import "./styles.css";

const counter = document.querySelector("#counter");
const addBtn = document.getElementById("add");
const sunBtn = document.querySelector("#sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");
let state = 0;
function render() {
  counter.textContent = state.toString();
}

addBtn.addEventListener("click", () => {
  state++;
  render();
});

sunBtn.addEventListener("click", () => {
  state--;
  render();
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state++;
    render();
  }, 2000);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
