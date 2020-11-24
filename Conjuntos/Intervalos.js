//Exemplos de conjuntos

const texto = "1,2,3,4,5,6,a.b c!d?e[f"

console.log(texto.match(/[a-z]/g)); //Intervalo de letras
console.log(texto.match(/[b-d]/g)); //Intervalo de números
console.log(texto.match(/[2-4]/g)); //Intervalo menor
console.log(texto.match(/[A-Z1-3]/gi)); //Intervalos de letras e números