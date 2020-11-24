const texto = "1,2,3,a.b c!d?e[f"

console.log(texto.match(/\D/g)); //Tudo que não é número
console.log(texto.match(/[^0-9]/g)); //Tudo que não é número

console.log(texto.match(/[^\d!\?\[\s,\.]/g)); //Tudo que não é número  + tudo q não é ?[espaço,.

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))//Tudo que não está no intervalo de ! a / e no intervalo : a @ + tudo que não é espaço
