const ele = document.querySelector("#div1");
const ele2 = document.querySelector("#div2");
const ele3 = document.querySelector("#div3");
const ele4 = document.querySelector("#div4");

ele.addEventListener("click", () => {
  pintarNegro(ele);
});

ele2.addEventListener("click", () => {
  pintarNegro(ele2);
});

ele3.addEventListener("click", () => {
  pintarNegro(ele3);
});

ele4.addEventListener("click", () => {
  pintarNegro(ele4);
});

function pintarNegro(element) {
  element.style.backgroundColor = "black";
}
