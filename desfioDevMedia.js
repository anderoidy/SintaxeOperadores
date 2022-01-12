//Desafio de estagiario da DevMedia "Minha solucao"
function entradaDosDados() {
    var readlineSync = require('readline-sync');
    var userValido = 1234;
    var senhaValida = 9999;

    while (numUser != userValido) {
    var numUser = readlineSync.question('\nEntre com o numero do usuario! ');
    if(numUser != 1234) {
        console.log("User incorreto ");
        }  
    } 

    var passUser = readlineSync.question('Entre com o password! ');
if(passUser == senhaValida) {
    console.log("Acesso permitido") 
    console.log("\nO numero do usuario é: ", numUser);
    console.log("O password é: ", passUser);
} else {
    console.log("Acesso nao permitido ");    
    }

    var opcao = readlineSync.question('\nTecle 0 para continuar ou 1 para sair! ');

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
                var opcao = readlineSync.question('Tecle 0 para continuar ou 1 para sair! \n');
            }
            entradaDosDados();                    
        }
}

entradaDosDados();

