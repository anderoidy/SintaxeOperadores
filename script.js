//Usando Alert no Console do Chrome

// function funcReceParam(param1, param2) {
//   param1 = Number(prompt("Entre com o primeiro parametro\n "));
//   param2 = Number(prompt("Entre com o segundo parametro!\n "));
//   if (param1 === param2) {
//     alert("parametros sao iguais");
//   } else alert("Parametros Não são iguais");

//   if (param1 + param2 > 10 || param1 + param2 < 20) {
//     alert`Soma do do primeiro parametro com o segundo parametro é maior 10 ou menor que 20`;
//   } else
//     alert`A soma do primeiro parametro com o segundo parametro NÃO é maior 10 ou menor que 20`;
// }
// funcReceParam();

//Usando Node
function funcReceParam(param1, param2) {
  if (param1 === param2) {
    console.log("parametros sao iguais");
  } else console.log("Parametros Não são iguais");

  let resultado = param1 + param2;
  if (resultado > 10) {
    console.log(
      `Soma de ${param1} + ${param2} = ${resultado} é maior que 10`
    );
  }
  if (resultado < 10) {
    console.log(
      `Soma de ${param1} + ${param2} = ${resultado} é menor que 10`
    );
  }
  if (resultado < 20) {
    console.log(`Soma do ${param1} + ${param2} é menor que 20`);
  }
  if (resultado > 20) {
    console.log(`Soma do ${param1} + ${param2} é maior que 20`);
  }
}
funcReceParam(20, 6);
