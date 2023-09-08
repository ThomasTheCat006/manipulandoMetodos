var prompt = require('prompt-sync')();

// Aplicação 1: filter()

var numeros = new Array(2, 45, 7, 10, 33);

var par = numeros.filter((number) => number % 2 == 0);

console.log(par);

// Aplicação 2:

var idades = new Array(23, 18, 19, 27);

var maioridade = idades.every((number) => number >= 18);

if(maioridade){
    console.log('Todos tem maioridade');
}else{
    console.log('Nem todos tem maioridade');
}

// Aplicação 3:

var nomes = new Array('Pedro', 'Carlos', 'Bianca', 'Miguel', 'Ana');

var nomesOrdenados = nomes.sort();

console.log(`Nomes Ordenados: ${nomesOrdenados}`);

// Aplicação 4:

var vendas = new Array(23, 44, 25, 70);

var investimento = 124;

const ganho = vendas.reduce((total, valor) => total + valor, 0); 

console.log(ganho);

if((ganho - investimento) > 0){
    console.log(`Houve um lucro de ${ganho - investimento}`);
}else{
    console.log('Não houve lucro');
}