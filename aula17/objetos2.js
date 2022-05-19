let usuario = {
    nome: 'kaique',
    idade: 24,
    estudante: 'tecnologia',
    competencias :{
        linguagens: ['JavaScript', 'Phyton', 'Go'],
        instrumentosMusicais:['guitaeea', 'Baixo']
    }

}


console.log(usuario);

usuario.ano = 2022;

console.log(usuario);

delete usuario.idade //deletar qualquer coisa nome ano idade

usuario.hobbies =  ['futebol', 'estudar', 'cerveja']

console.log(usuario)

let usuario2 = {
    digaOi (name){
        return `Olá ${name}`
    }
}

console.log(usuario2.digaOi('kaique'))

let cor = 'amarelo';

let usuario3 = {
    nome: 'Kaique',
    cor   //ao invés de colocar cor: cor so coloco cor
};

console.log(usuario3);


let usuario4 = {
    nome: 'kaique',
    idade: 24
}

let extraInfo = {
    pais: 'Brasil',
    estado: 'São paulo'
}

//para juntar os dois blocos acima existi um metado chamado assing

let novoUsuario = Object.assign({}, usuario4, extraInfo)//se eu quiser que ele gere um objeto aparti dos objetos acimatem que colocar umas chaves vazias que vc ta querendo fazer com essas chaves vazias que ele ira juntar os dois objetos acima
    console.log(novoUsuario)

    let novoUsuario2 = {
        ...usuario4, //os 3 pontos chama sprade em portugues espalhar vc ta indo em usuario4 e espalhando pra dentro do usuario 2
        ...extraInfo,
        sexo: 'M',
        profissao: 'progamador'
        
    }

    console.log(novoUsuario2);

    let nomeVariavel = 'estado';// se eu quiser mudar nomevariavel para que seja estado colocar entre conchetes
    let nome = 'lastName';

    let usuario5 = {
        [nome]: 'Kaique', 
        [nomeVariavel]: 'São paulo'
    }

    console.log(usuario5);

    let usuarios = [
        {
            nome: 'Kaique',
            idade: 24
        },
        {
            nome: 'Joao',
            idade: 19
        },
        {
            nome: 'Maria',
            idade: 21
        }
    ]

    console.log(usuarios[2].nome)// quando vc coloca numeros entre conchotes ai pode altera os nomes 

    let usuario = {
        posicao: 0,
        proximo(){
            ++this.posicao // this e o propio objetoque se referese a posição  e acrecenta um encremento
        },
        anterior(){
            --this.posicao; //this e o propio objetoque se referese a posição  e acrecenta um decremento
        }
    };

    console.log(usuario.atual);
    usuario.proximo();

    console.log()

