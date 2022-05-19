let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#filista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100) { //se o number de n for maior ou igual a 1 e o number de 100 for menor ou igual a 100 ele so vai aceitar valores entre 0 e 100
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){//se  na lista .idexOf number (n) for diferente de menos 1 que segnifica o menos um e que ele nao foi encontrado na lista
        return true
    }else {
        return false
    }

}


function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){ // esclamção que dizer nao 
        valores.push(Number(num.value))  //push e adicionar um elemento no vetor
        let item = document.createElement('option') // item que vai ser adicionado dentro da caixa de texto 
        item.text = `Valor ${num.value} adicionado` // aparecera esse isso dentro da caixa de texto
        lista.appendChild(item) // necesario ter isso para poder adicionar tambem
        res.innerHTML = ''
    }
    
    else{
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''  // para apagar
    num.focus() // para apagar quando vc digitar o numero da barra de tarefas
}

function finalizar (){
    if (valores.length == 0)  {
        //se valores . lenght for igual a zero pra ser igual tem que colocar dois iguais se o vetor estiver vazio
        window.alert('adicione valores ante de finalizar!')  // . alerte adicione valores ante de finalizar!
    } else{//se nao 
        let tot = valores.value  // o total de elementos  saber quantos elementos o vetor tem

        res.innerHTML = '' //res.inerthtml recebe vazio  recebe e valor de igual aspas e o vazio
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`  //res.innerhtml e o que ele tem concatenado que e += ele vai adicionar isso a uma streng `Ao todo, temos ${tot}  numeros cadastrados` tot e o total
    } 
}