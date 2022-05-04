import "./styles.css";

const counter = document.querySelector("#counter");
const addBtn = document.getElementById("add");
const sunBtn = document.querySelector("#sub");

let state = 0;
function render() {
  counter.textContent = state.toString();
}

render();

addBtn.addEventListener("click", () => {
  state++;
  render();
});

sunBtn.addEventListener("click", () => {
  state--;
  render();
});
