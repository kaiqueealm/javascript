let amigo = {nome: 'josé', // amigo e variavel se eu colocar amigo.pseo ou .sexo ou .peso vou chamar so um
sexo:'M',
peso: 85.4,
engorda(p=0){ // se o peso nao passa ele e zero 
    console.log('engordou')
    this.peso += p // this e uma palavra auto referente ao obejeto
}}

amigo.engorda(5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)