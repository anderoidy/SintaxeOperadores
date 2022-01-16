const listaDeProdutos = [
    {
        name: 'sabao em pó',
        preco: 15,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoCartao = 100;

function subtraeSaldo(saldoCartao, listaDeProdutos) {
    return listaDeProdutos.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoCartao);
}

console.log(subtraeSaldo(saldoCartao, listaDeProdutos));
