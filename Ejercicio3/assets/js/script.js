// CAMBIAR DIVS A NEGRO

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

// CAMBIAR COLOR A DIV BLANCO

const divKey = document.querySelector("#key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    colorTecla = "pink";
    divKey.style.backgroundColor = colorTecla;
  } else if (event.key === "s" || event.key === "S") {
    colorTecla = "orange";
    divKey.style.backgroundColor = colorTecla;
  } else if (event.key === "d" || event.key === "D") {
    colorTecla = "lightblue";
    divKey.style.backgroundColor = colorTecla;
  }
});
