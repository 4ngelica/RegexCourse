//Desafio p/ identificar três espaços entre a e b
const texto = "a   b"
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s+b/))  //Um ou mais espaços em branco
console.log(texto.match(/a {3}b/))  //Um quantificador {3} indicando q existem 3 espaços literais

