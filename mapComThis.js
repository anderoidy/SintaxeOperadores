const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

const morango = {
    value: 4,
};

function mapComThis(vetor, thisArg) {
    return vetor.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

console.log('this -> morango', mapComThis(nums, morango));