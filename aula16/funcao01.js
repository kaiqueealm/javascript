function parimpar(n) {
    if (n%2 == 0){ // se o n dividido por 2 for igual a 0 igual sao dois iguais 
        return 'par!'
    }else {
        return 'impar!'
    }
}

let res = parimpar(4) // tem que colocar parimpa sempre dentro de uma variavel ou pode ser so console.log dentro dos parenteses
console.log(res)