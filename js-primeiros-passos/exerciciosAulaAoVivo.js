var soma = 0 
for(var index = 0 ; index <= 50; index += 1){
    soma = soma + index
}
console.log("A soma total de 1 a 50 é", soma)

var contador = 0

for(var i = 2; i <= 150; i+=1){
   if (i % 3 ===0){
        contador= contador + 1
   }
}
console.log(`Existem ${contador} númer`)