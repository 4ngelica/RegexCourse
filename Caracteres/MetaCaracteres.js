//Introdução aos metacaracteres

const texto = "1,2,3,4,5,6,a.b c!d?e";
const regexPonto = /\./g; //Expressão de busca para o caractere simples (escrito na forma literal) "." de forma global
console.log(texto.split(regexPonto));
const regexSimbolos = /,|\.|\?|!| /g; //Busca , ou. ou interrogação ou exclamação ou espaço (interrogação e ponto são metacaracteres por isso está escrito na forma literal)
console.log(texto.split(regexSimbolos));