//Introdução aos conjuntos
//Conjuntos(ou classe de caracteres) são definidos por []

const texto = "1,2,3,4,5,6,a.b c!d?e[f"

const regexPares = /[02468]/g //Define um conjunto de elementos que são pares
console.log(texto.match(regexPares)); //Busca no texto elementos que estão classificados como pares

const texto2 = "João não vai passear na moto."
const regexComESemAcento = /n[aã]/gi;
console.log(texto2.match(regexComESemAcento)); //Busca no texto a letra n acompanhada de ã ou a
