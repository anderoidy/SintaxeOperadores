//Desafio de estagiario da DevMedia "Minha solucao"

var readlineSync = require('readline-sync');

while (numUser != 1234) {
    var numUser = readlineSync.question('Entre com o numero do usuario! ');
    if(numUser != 1234) {
        console.log("User incorreto ");
    }  
} 

var passUser = readlineSync.question('Entre com o password! ');
if(passUser == 9999) {
    console.log("Acesso permitido") 
    console.log("\nO numero do usuario é: ", numUser);
    console.log("O password é: ", passUser);
} else {
    console.log("Acesso nao permitido ");
}


