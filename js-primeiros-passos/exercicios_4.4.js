let player= {
    nome: 'Marta',
    ultimoNome: 'Silva',
    idade: 34,
    medals: {golden: 2, silver: 3}
};
console.log("A jogadora" + ' ' + player.nome + " " + player.ultimoNome + " "  + "tem" + " " + player.idade + " " + "anos de idade")

player.bestInWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log("A jogadora" + " " + player.nome + " " + player.ultimoNome + " " + "foi eleita a melhor do mundo por" + " " + player.bestInWorld.length + " " + "vezes")

console.log("A jogadora possui" + " " + player.medals.golden + " " + "medalhas de ouro e" + " " + player.medals.silver + " " + "medalhas de prata")

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let key in names){
    console.log("Olá" + " " + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car){
    console.log(car[key])
  }

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem vinda, " + info.personagem)

  info.recorrente = "Sim"
console.log(info)

for(let key in info){
    console.log(key)
}

for(let key in info){
    console.log(info[key])
}

let disney = {
   personagem: 'Tio Patinhas', 
   origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas', 
  recorrente: 'Sim'
}

for(let key in info){
    if(
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        disney[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes')
    }else{
        console.log(info[key] + ' e ' + disney[key])
    }
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de" + " " + leitor.nome + " " + leitor.sobrenome + "se chama" + " " + leitor['livrosFavoritos'][0]['titulo'])

  leitor.livrosFavoritos.push = (
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
  )

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

  function verificaPalindrome(string){

    for(index in string){
        if(string[index] != string[(string.length - 1) - index]){
            return false;
        }
    }
    return true;
  }
  console.log(verificaPalindrome('arara'));