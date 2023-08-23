document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
      document.getElementById("mensagem").innerHTML =
        "<div class='mensagem-valida'>Formulário válido!</div>";
    } else {
      document.getElementById("mensagem").innerHTML =
        "<div class='mensagem-invalida'>Formulário inválido!</div>";
    }
  });
