const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!"
const texto2 = "There is a big fog in NYC"

// Zero ou 1 opcional
const regex = /fogo?/gi //Um "o" ou nenhum "o"
console.log(texto1.match(regex));
console.log(texto2.match(regex));