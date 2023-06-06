let numeroAleatorio = Math.round(Math.random() * 100);
const campo = $("#campo-digitacao");
const botao = $("#botao-chutar");
function verificaRespostas() {
  botao.on("click", function () {
    let respostaCerta = $(".numero-certo");
    const numeroDaCaixa = $("#borda-quadrada");
    let valorCampo = campo.val();
    if (valorCampo == numeroAleatorio) {
      respostaCerta = respostaCerta.text(valorCampo);
      numeroDaCaixa.addClass("resposta-certa");
      numeroDaCaixa.removeClass("resposta-errada");
      $(".condicao-de-acerto").show();
      $(".condicao-de-erro").hide();
    } else {
      numeroDaCaixa.addClass("resposta-errada");
      numeroDaCaixa.removeClass("resposta-certa");
      $(".condicao-de-erro").show();
      $(".condicao-de-acerto").hide();
    }
    adicionarDicaNova();
  });
}
verificaRespostas();
function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  let resetBorda = $("#borda-quadrada");
  $(".condicao-de-acerto").hide();
  $(".condicao-de-erro").hide();
  resetBorda.removeClass("resposta-errada");
  resetBorda.removeClass("resposta-certa");
}

$("#botao-reiniciar").click(reiniciaJogo);
campo.on("input", function () {
  const imputado = $(this).val();
  if (parseInt(imputado) > 100) {
    campo.val(100);
  }
});

function adicionarDicaNova() {
  const imputado = campo.val();
  const liGrande = $(
    "<li> O número secreto é MAIOR que " + imputado + ".</li>"
  );
  const liPequena = $(
    "<li> O número secreto é MENOR que " + imputado + ".</li>"
  );
  if (imputado < numeroAleatorio) {
    $("#historico").append(liGrande);
  }
  if (imputado > numeroAleatorio) {
    $("#historico").append(liPequena);
  }
}
