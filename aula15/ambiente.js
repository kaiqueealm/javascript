let num = [5,8,2,9,3]
num.push(0)//e se quiser acrecentar no final 
num.sort()//pegar todos os elemento e colocar em ordem crecente
console.log(num)
console.log(`O vetor tem  ${num.length} posições `)//para saber o comprimento nao tem paranteses
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1 ){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}
