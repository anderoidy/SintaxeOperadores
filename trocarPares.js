// var vetorNumeros = [1, 2, 3, 4, 5, 6];

// if (vetorNumeros.length === 0) {
//     return console.log("-1")
// } else {
//     if ()
//     console.log(vetorNumeros)
// }

function seParTroca0(array) {
  if (array.length === 0) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (array === 0) {
      console.log("Array é vazio");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0 ...`);
      array[i] = 0;
    }
  }
  return array;
}

let array = [1, 2, 3, 12, 24, 25, 27];
seParTroca0(array);

console.log(seParTroca0([1, 2, 3, 4, 5, 6]));
