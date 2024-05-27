let listaNomes = [];
let listaNomesSorteados = [];
let listaSorteadosFinal = [];

let resultadoSorteio = document.getElementById('lista-sorteio');
let linhaSorteio;

while(listaNomes.lenght){
    adicionar();
    if(sortear()){
        break;
    }
}

function adicionar(){
    let inputNomeAmigo = document.getElementById('nome-amigo').value;
    listaNomes.push(inputNomeAmigo);

    inputNomeAmigo.innerHTML = `<input id="nome-amigo" class="form__input" type="text" placeholder="Nome do amigo">`
    let caixaListaAmigos = document.getElementById('lista-amigos');
    caixaListaAmigos.innerHTML = ` <p id="lista-amigos">${listaNomes}</p> `
}
   
function sortear(){
    alert("Sorteou");
    let indiceSorteado_ListaNomes;
    let quantidade = listaNomes.length;

    for(let i = 0; i < quantidade; i++){
        indiceSorteado_ListaNomes = listaNomes[ObterNumeroAleatorio(0, quantidade)]
        while(listaNomesSorteados.includes(indiceSorteado_ListaNomes)){
            indiceSorteado_ListaNomes = listaNomes[ObterNumeroAleatorio(0, quantidade)];
        }
        listaNomesSorteados.push(indiceSorteado_ListaNomes)
    }
    alert(listaNomesSorteados);  
    
    let index = 0;
    for(let y = 0; y < listaNomesSorteados.length - 1; y++){
        linhaSorteio = `<p id="lista-sorteio">${listaNomesSorteados[index]} --> ${listaNomesSorteados[index + 1]}</p>`;
        listaSorteadosFinal.push(linhaSorteio)
        alert(listaSorteadosFinal);
        index++
    }

    listaSorteadosFinal.push(`<p id="lista-sorteio">${listaNomesSorteados[listaNomesSorteados.length - 1]} --> ${listaNomesSorteados[listaNomesSorteados.length - listaNomesSorteados.length]}</p>`);
    resultadoSorteio.innerHTML = listaSorteadosFinal.join('');                                                           
}

function ObterNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min) - min);
}

function reiniciar(){
    listaNomes = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = `<p id="lista-amigos"></p>`;
    listaNomesSorteados = [];
    listaSorteadosFinal = [];
    document.getElementById("lista-sorteio").innerHTML = `<p id="lista-sorteio"></p>`
}
