//Uso de unicode no Regex

const texto = "aʬc௵d"
console.log(texto.match(/\u02AC|\u0BF5/g));