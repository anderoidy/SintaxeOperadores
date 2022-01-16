function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(itemDoArray) {
    return itemDoArray % 2 === 0;
}

const arrayPraVerPar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtraPares(arrayPraVerPar));
