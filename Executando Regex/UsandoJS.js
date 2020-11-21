//Testando os métodos do js para Regex

//MÉTODOS DO REGEX
//test: Retorna true ou false se o elemento testado estiver presente
//exec: Executa a expressão regular definida anteriormente

//MÉTODOS DA STRING
//match: Busca a correspondência dentro da string
//search: Retorna o index da primeira correspondência dentro da string
//replace: Substitui a correspondência por um valor definido
//split: Une todos os elementos fora da correspondência e separa todos os elementos após a correspondência


const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto))
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras))
console.log(texto.search(regexLetras))
console.log(texto.replace(regexLetras, 'Achei'))
console.log(texto.split(regexLetras))