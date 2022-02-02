//{ exercicio 1
//const a = 3
//const b = 2

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(a % b)}

// Exercicio 2 {const umNumero = 3
//const outroNumero = 5


//if(outroNumero > umNumero){
//    console.log(outroNumero, "outroNumero é maior que umNumero")
//}
//else{
//    console.log(umNumero, "umNumero é maior que outroNumero")
//}
//}

const a = 1
const b = 2
const c = 3

if(a > b && a > c) {
    console.log("a é o maior numero")
}
else if(b > a && b > c){
    console.log("b é o maior numero")
}
else{
    console.log("c é o maior numero")
}

const teste = 0
if(teste > 0){   
    console.log("positive")
}
else if(teste < 0){
    console.log("negative")
}
else{
    console.log(0)
}

const angulo1 = 60

const angulo2 = 60

const angulo3 = 60

var todosOsAngulos = angulo1 + angulo2 + angulo3

var angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (angulosPositivos){
    if(todosOsAngulos === 180){
        console.log("true")
    }
    else{
        console.log("false")
    }
}