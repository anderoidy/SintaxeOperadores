function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
        nome: 'Maria',
        idade: 30,
    };

const pessoa2 = {
          nome: 'João',
          idade: 25,
      };

      const animal = {
          nome: 'fiona',
          idade: 5,
          raca: 'Pug'
      };

//usando o call 
//console.log(calculaIdade.call(pessoa2, 30));

//usando o apply   Obs o apply tem que usar os couchetes na idade
console.log(calculaIdade.apply(pessoa2, [30]));
