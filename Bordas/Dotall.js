const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi)) //[\s\S] Substitui o ponto, pois inclui tdo que é espaço e não espaço