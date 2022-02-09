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

const pecaDeXadrez = 'bispo'

switch(pecaDeXadrez.toLowerCase()){
    case 'rei':
        console.log("Rei > Avança uma casa em qualquer direção");
        break;
        
        case 'rainha':
            console.log("Rainha: Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais")
            break;
            
            case 'torre:':
                console.log("Torre: pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda).")
                break;

                case 'bispo':
                    console.log("Sem restrição de número de casas, mas somente no sentido diagonal.")
                    break;

                    case 'cavalo':
                        console.log("Cavalo: Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção.")
                        break;

                        case 'peão':
                            console.log("Peão: Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal.")
                            break;
                            default:
                                console.log('Erro, peça inválida!');
                                      break;
}


var nota = 97

if(nota < 0 || nota > 100){
    console.log("ERRO, Nota Inválida")
}else if(nota >=90){
    console.log("A")
}else if(nota >= 80){
    console.log("B")
}else if(nota >= 70){
    console.log("C")
}else if(nota >= 60){
    console.log("D")
}else if(nota >= 50){
    console.log("E")
}else if(nota < 50){
    console.log("F")
}

const x= 2;
const y = 3;
const z = 5;

var isEven = false;

if ((x % 2 === 0 || y % 2 === 0 || z % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

const d = 1
const e = 7
const f = 4

var teste3 = false

if((d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0)){
    teste3 = true
}
console.log(teste3)

const custoDoProduto = 2
const valorDeVenda = 4

if(custoDoProduto >= 0 && valorDeVenda >= 0){
    const custoTotalDoProduto = custoDoProduto * 2.4;
    const lucroTotal = (custoTotalDoProduto - valorDeVenda)*1000;
    console.log(lucroTotal)
}else{
    console.log("ERRO, os valores não podem ser negativos")
}



let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));

