var numero = 1
for(var index = 10 ; index > 0 ; index -=1){
    numero *= index
    console.log(numero)
}

var palavra = 'tu é gay?'
var palavraReversa = ''

for(var index = 0; index <= palavra.length ; index++){
    palavraReversa += palavra.charAt(palavra.length - index)
    console.log(palavraReversa)
}

let array = ['java', 'javascript', 'python', 'html', 'css'];

var maiorPalavra = array[0]
var menorPalavra = array[0]

for(var index = 0 ; index < array.length ; index += 1){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index]
    }
}

for(var index = 0 ; index < array.length ; index += 1){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index]
    }
}

console.log(maiorPalavra)
console.log(menorPalavra)


