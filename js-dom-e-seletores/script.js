function modificacao(){
let elementos = document.getElementsByTagName('p')[1].innerText = "Me Vejo bem sucedido na area de desenvolvimento"
console.log(elementos)
}
modificacao()

function cor(){
    let cores = document.querySelector('.main-content').style.backgroundColor = ('rgb(76,164,109)')
    console.log(cores)
    let cores2 = document.querySelector(".center-content").style.backgroundColor = "white"
    console.log(cores2)
}
cor()

function correcao(){
    let corretor = document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript"
    console.log(corretor)
}
correcao()

