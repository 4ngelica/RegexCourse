//Flag g - global
//Flag i - ignore case

const texto = "Carlos assinou o abaixo-assinado com certeza";

console.log(texto.match(/C|ab/) + " - Encontra apenas a primeira correspondência");
console.log(texto.match(/C|ab/g) + " - Encontra todas as correspondências");
console.log(texto.match(/c|ab/gi) + " - Encontra todas as correspondências ignorando se é maiúsculo ou minúsculo");
