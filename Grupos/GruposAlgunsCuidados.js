const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // Dentro de um conjunto, um grupo não funciona como grupo
console.log(texto.match(/([abc])/gi)) //Dentro de um grupo, vale usar conjunto
console.log(texto.match(/(abc)+/gi))