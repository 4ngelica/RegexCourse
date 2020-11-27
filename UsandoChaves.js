const texto = "O João recebeu 120 milhões apostando 6 9 21 23 45 46"

console.log(texto.match(/\d{1,2}/g)); //Trás elementos com 1 ou 2 dígitos (guloso, sempre tenta selecionar 2)
console.log(texto.match(/[0-9]{2}/g)); //Apenas numeros com 2 digitos nesse intervalo
console.log(texto.match(/\d{1,}/g)); //Trás números com 1 ou mais dígitos (guloso)

console.log(texto.match(/\w{7}/g)); //Caracteres que tenham 7 dígitos (ignora õ, pois não está no shorthand w)
console.log(texto.match(/[\wõ]{7}/g)); //Caracteres que tenham 7 dígitos com o shorthand w ou õ

console.log(texto.match(/\b[\wõ]{7}\b/g)); //Usando shorthand bordas (\b) para trazer apenas palavras com 7 caracteres e envolto por bordas




