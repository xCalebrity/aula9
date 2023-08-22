/*
Exercício 1

Concatenação
*/


const nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual é a sua cor favorita?")
const frase1 = "A cor favorita de " + nome + " é " + cor + " !"
alert(frase1)
console.log(frase1)
/*
Template string
*/

const frase2 = `A cor favorita de ${nome} é ${cor} !`
alert(frase2)
console.log(frase2)
/*
Exercício 2
*/

const frase3 = prompt("Como foi seu dia?")
const iLanguage = frase3.replaceAll("o", "i").toUpperCase()
alert(iLanguage)

console.log(iLanguage)
console.log(iLanguage.length)
 
/*
Exercício 3
*/

const numero = prompt("Insira um número de 0 a 4")
const cachorro = ["pinscher", "pit-bull", "lulu-dapomerania", "pastor alemão", "labrador"]
const dog = cachorro[Number(numero)]
console.log(dog)
alert(dog)

/*
Exercício 4
*/

const numero1 = ["1","2","3","4","5","6"]
console.log(numero1.length)
numero1.push(7)
numero1.splice(3,2)
console.log(numero1.length)
