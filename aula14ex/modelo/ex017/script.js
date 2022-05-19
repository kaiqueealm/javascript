function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == 0){   //se o Por favor, digite o numero!
        window.alert('Por favor, digite o numero!')
        
    }else{
        let n = Number(num.value)// se nao, ele pega o numero  /////n vai ser a variavael que o cara digitol e number para troca para numero
        let c = 1 
        tab.innerHTML = '' //para limpar a area antes de mostrar a tabauda tab recebe nada que as esclamações  
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //${n}let n e o numero da tabuada depois mostra o contador que e ${c} let c para ele fazer numero x 1 numero x 2 etc ... ${n*c} resultado da mutiplicação ai vai fazer a let  n  vezes a let c 
            item.value = `tab${c}`// para o javascript nao faz tanto sentindo mais para outras linguagens tipo php fara  para vc saver qual foi o item que foi selecionado
            tab.appendChild(item) //.appendChild adicionar um elemento filho vai ser o item
            c++
        }
        
        }
    }
