let dinheiro = 1000;
let negocios = 0;

function startGame() {
  document.getElementById("status").innerHTML =
    "Você começou com $" + dinheiro + " e nenhum negócio.";
}

function abrirNegocio() {
  if (dinheiro >= 500) {
    negocios++;
    dinheiro -= 500;
    document.getElementById("status").innerHTML =
      "Você abriu um novo negócio! Total: " + negocios +
      " | Dinheiro restante: $" + dinheiro;
  } else {
    document.getElementById("status").innerHTML =
      "Dinheiro insuficiente para abrir um negócio.";
  }
}
