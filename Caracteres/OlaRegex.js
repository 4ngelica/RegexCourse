//Exemplos de busca por caracteres (valores literais)

const texto = "Casa bonita é a casa amarela da esquina com a Rua Acasalar";

const regex = /casa/gi;
console.log(texto.match(regex));
console.log(texto.match(/a b/));