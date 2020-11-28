const texto = "<div>Conteudo 01</div> <div>Conteudo 02</div> "

//Por default os quantificadores são gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g)); 
console.log(texto.match(/<div>.*<\/div>/g)); 
console.log(texto.match(/<div>.{0,100}<\/div>/g)); 

//Por default os quantificadores não gulosos (lazy)

console.log(texto.match(/<div>.+?<\/div>/g)); 
console.log(texto.match(/<div>.*?<\/div>/g)); 
console.log(texto.match(/<div>.{0,100}?<\/div>/g));






