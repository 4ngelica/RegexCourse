//Ranges que capturam outros elementos, exemplos de ranges errados

const texto = "ABC [abc] a-c 1234"

console.log(texto.match(/[a-c]/g)); //a, b, c, a, b, c, referentes a ABC e a-c
console.log(texto.match(/a-c/g)); //Não é um intervalo, portanto imprime os elementos literais "a-c"
console.log(texto.match(/[A-z]/g)); //Imprime letras maiúsculas e minúsculas + colchetes

//O intervalo usa a ordem da tabela Unicode
//Entre o A-z, existem alguns símbolos no meio, incluindo colchetes, por isso imprimiu os colchetes