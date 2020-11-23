//Encontrando textos literais

const texto = "1,2,3,4,5,6,a.b c!d7e";
const regexVirgula = /,/
console.log(texto.split(regexVirgula)); // separa em elementos cada vez que encontra uma vírgula
console.log(texto.match(regexVirgula)); //Encontra a primeira vírgula e o índex 1
console.log(texto.match(/,/g)); //Encontra todas as vírgulas e o índex da primeira correspondência (1)
console.log(texto.match(/A/gi)); //Encontra as letras A maiúsculas ou não
console.log(texto.match(/2/g)); //Encontra os números 2
console.log(texto.match(/b c!d/)); //Encontra a correspondência e o índice


