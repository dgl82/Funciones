// const ele = document.getElementById("ele1");
// ele.addEventListener("click", pintar);

// function pintar() {
//   ele.style.backgroundColor = "yellow";
// }

// EJERCICIO 2.2 - COMENTAR CÓDIGO PARA PROBAR SIGUIENTE EJERCICIO

const ele = document.getElementById("ele1");

ele.addEventListener("click", function () {
  ele.style.backgroundColor = "yellow";
});

// EJERCICIO 2.3 - COMENTAR PARA PROBAR EJERCICIO ANTERIOR

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => {
  pintar(ele, "yellow");
});

function pintar(element, color = "green") {
  element.style.backgroundColor = color;
}
