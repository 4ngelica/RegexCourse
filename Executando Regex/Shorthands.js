const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)); //Imprime todos os números \d  - Representa o conjunto [0-9]
console.log(texto.match(/\D/g)); //Imprime todos os não números \D - Representa o conjunto [^0-9]
console.log(texto.match(/\w/g)); //Imprime todos os caracteres \w - Representa o conjunto [a-zA-Z0-9]
console.log(texto.match(/\W/g)); //Imprime todos não caracteres \w - Representa o conjunto [^a-zA-Z0-9]
console.log(texto.match(/\s/g)); //Imprime todos os espaços em branco - Conjunto: [\t\n\r\f]
console.log(texto.match(/\S/g)); //Imprime todos que não são espaços em branco - Conjunto: [^\t\n\r\f]





