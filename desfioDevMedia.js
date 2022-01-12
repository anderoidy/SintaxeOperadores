//Desafio de estagiario da DevMedia "Minha solucao"
function entradaDosDados() {
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

    var opcao = readlineSync.question('Tecle 0 para continuar ou 1 para sair! ');

    switch(opcao) {

        case "0":
            entradaDosDados();        
        break;        
        case "1":
        console.log("Até a proxima ");
        break;
        default: 
            while(opcao != "0" && opcao != "1") {
                console.log("Opção invalida");                
                var opcao = readlineSync.question('Tecle 0 para continuar ou 1 para sair! ');
            }
            entradaDosDados();                    
        }
}

entradaDosDados();

