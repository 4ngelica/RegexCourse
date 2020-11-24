//Exemplos de conjuntos com metacaracteres

const texto = ".$+*?-" 
console.log(texto.match(/[.$+*?-]/g)); //O ponto dentro do conjunto tem sentido literal
console.log(texto.match(/[+.?*$]./g)); //O ponto fora do conjunto tem sentido "coringa"
console.log(texto.match(/[$-?]/g)); //Conjunto de caracteres especiais

//Não funcionam como conjunto
console.log(texto.match(/[$\-?]/g)); //Hífen funciona como literal
console.log(texto.match(/[-?]/g)); //Não define um intervalo, funciona como dois caracteres literais
