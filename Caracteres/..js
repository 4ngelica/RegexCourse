//Ponto exercendo função de metacaractere

const texto = "1,2,3,4,5,6,7,8,9,0"
console.log(texto.match(/1.2/g)); //Encontra qualquer expressão que tenha 1 e 2 com algum caractere qualquer entre eles;
console.log(texto.match(/1..2/g)); //Não encontra nada, pois não há correspondencia com dois caracteres entre 1 e 2
console.log(texto.match(/1..,/g)); //Encontra 1 + dois caracteres + uma vírgula

const notas = "8.3,7.1,8.8,10.0"

console.log(notas.match(/8../g));
console.log(notas.match(/.\../g));
