function somaItems(arrayPraSoma){ 
    return arrayPraSoma.reduce(function(prev, current) {
        return prev + current;
    })
}

const arrayPraSoma = [1, 2, 3, 4, 5, 6];

console.log(somaItems(arrayPraSoma));