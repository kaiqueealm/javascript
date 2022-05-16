function fatorial(n){
    let fat = 1// variavel fat e ela recebe 1
    for (let c = n; c > 1; c--){// for contador começando em n enquanto o contador for maior que 1 o contador perde um
        fat *=c // fatorial vezes o c

    }
    return fat
}

console.log(fatorial(5))

//5! = 5 x 4 x 3 x 2 x 1