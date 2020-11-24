//Analisando a excessão do metacaractere . (nao funciona para o \n)

const texto = "Bom\ndia"
console.log(texto.match(/./g)); //Ignora a quebra de linha

