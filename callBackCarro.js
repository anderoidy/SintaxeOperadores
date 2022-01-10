// const maca = {
//     value: 2
// }

// const laranja = {
//     value: 3
// }

// function mapComThis(arr, thisArg) {
//     return arr.map(function(item) {
//         item / this.value;
//     }, thisArg);
// }

// const nums = [1, 2];

// console.log('this -> maçã', 
// )

function funcImprime() {
    console.log("mensagem da funcao normal")
}

funcImprime();

const varDaMensag = () => { console.log("Mensagem da arrow function")};
 varDaMensag();

const arrowSoma = (a, b) => { console.log(a + b)}; 
 arrowSoma(3, 5)

const carros = [
    {name: 'Ferrary'},
    {name: 'Porshe'},
    {name: 'BMW'},
    {name: 'Mercedes Bens'}
];

const listaDeCarros = document.getElementById('idListCars');

const funcGetCarros = () => {
    setTimeout(() => {
        let output = '';
        carros.forEach((item, indice) => {
            output += `<li>${item.name}</li>`       
        });

        listaDeCarros.innerHTML = output;

    },1000);
};

    funcGetCarros();