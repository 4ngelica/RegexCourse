const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!"
const texto2 = "There is a big fog in NYC"

// Um ou mais
const regex = /fogo+/gi //Um "o" ou nenhum "o"
console.log(texto1.match(regex));
console.log(texto2.match(regex));

const texto3 = "0123456789."
console.log(texto3.match(/[0-9]/g)); //Separa cada elemento do intervalo
console.log(texto3.match(/[0-9]+/g)); //Trás todos os elementos juntos



