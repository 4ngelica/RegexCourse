const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g)) //Captura todas as quebras de linha
console.log(texto.match(/^(\w).+\1$/gi)) //Não captura nada, pois encontra o problema da quebra de linha (ponto nao resolve para \n)
console.log(texto.match(/^(\w).+\1$/gim)) //A tag multline serve para que a regex considere as quebras de linha