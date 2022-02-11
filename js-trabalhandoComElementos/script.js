 var titulo = document.createElement('h1')
    titulo.innerText = "Exercício 5.2 - JavaScript DOM "
     document.body.appendChild(titulo)
     titulo.className = "title"

var tag = document.createElement('main')
    tag.className = 'main-content'
    document.body.appendChild(tag)

var secao = document.createElement('section')
secao.className = "center-content"
secao.style.backgroundColor = "green"
tag.appendChild(secao)

var p = document.createElement('p')
p.innerText = "Vou ser um dos homens mais ricos do mundo"
secao.appendChild(p)

var secaoEsquerda = document.createElement('section')
secaoEsquerda.className = "left-content"
tag.appendChild(secaoEsquerda)

var secaoDireita = document.createElement('section')
secaoDireita.className = "right-content"
secaoDireita.style.marginRight = "right"
tag.appendChild(secaoDireita)

var imagem = document.createElement('img')
imagem.className = "small-image"
imagem.src = 'https://picsum.photos/200 '
secaoEsquerda.appendChild(imagem)

var lista = document.createElement("ul")
secaoDireita.appendChild(lista)
let numeros = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"]
for(index in numeros){
   var linha = document.createElement('li')
   linha.innerHTML = numeros[index]

    lista.appendChild(linha)
}

for(let index = 1; index <=3; index ++){
    var h3 = document.createElement("h3")
    h3.innerHTML = "Show" + index
    h3.className = "description"
    tag.appendChild(h3)
}


tag.removeChild(secaoEsquerda)
lista.lastChild.remove()
lista.lastChild.remove()