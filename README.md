
Atividade 

.Crie uma função que receba dois números como parâmetros.
.Confira se o números são iguais.
.Confira se a soma dos números é maior que 10 ou menor que 20.


Atividade segundo uma aula sobre Sintaxe de Operadores.

Atividade 1

Verifique de duas maneiras entre si, se uma String é um palindromo.

Exemplo:
Palindromo frase ou palavra que se pode ler indiferente, da esquerda pra direita ou vice-versa(ex: raiar, ama, ovo, omo, radar)


Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.


Exemolo:

Input -> [1, 3, 4, 6, 80, 33, 23, 90]
output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []
output -> -1


Atividade 3: alunos aprovados 

1. crie uam função que recebe o array alunos e um número que irá representar a média final;
2. Percorra o arry e populo um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a Técnica "object destructuring" para manipular as propriedades desejadas de casa aluno.

Atividade 4: This

Dada a função calculadora, utilize os métodos call e apply para modificar o valor de this. Crie seu próprios objetos para esta atividade!

function calculadora(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
