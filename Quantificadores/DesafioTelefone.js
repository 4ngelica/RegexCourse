 
const texto = `
Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    - (85) 99988-7766
    - (21)3261-8899
`

console.log(texto.match(/[(\d)]+?\s?[\d]+-[\d]+/g));