function funcReceParam(param1, param2) {
  param1 = Number(prompt("Entre com o primeiro parametro\n "));
  param2 = Number(prompt("Entre com o segundo parametro!\n "));
  if (param1 === param2) {
    alert("parametros sao iguais");
  } else alert("Parametros Não são iguais");

  if (param1 + param2 > 10 || param1 + param2 < 20) {
    alert(
      "Soma do primeiro com o segundo parametro é maior 10 ou menor que 20"
    );
  } else alert("A soma dos parametros NÃO é maior 10 ou menor que 20");
}

funcReceParam();
