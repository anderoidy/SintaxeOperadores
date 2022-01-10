/*
const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); // retorna: [2, 4,, 6, 8. 10] 
console.log(item)

//usando forEach
const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorna undefined
console.log(item)

//usadno filte 
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã'));
// retorno: ['mamaçã fuji', 'maçã verde'];
*/

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

//array com os valores multiplicados pela funcao mapSemThis
console.log(mapSemThis(nums));
//array nums ainda no seu formato original 
console.log(nums);

