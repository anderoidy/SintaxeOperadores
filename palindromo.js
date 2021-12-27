
//solucao 1
// function veSePalindromo(string) {
//     if(!string) return;

//     return string.split("").reverse().join("") === string;
// }
// console.log(veSePalindromo("ana"))

//solucao 2
function verSePalindro2(string) {
    if(!string) return "Estring inexistente"

    for( let i = 0; i<= string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]) { 
            return "Não É palindromo"
        }         
    }
    return "É um palindromo"    
}

console.log(verSePalindro2("omo"))
