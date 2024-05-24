function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeInput = document.getElementById('qtd').value;
    
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(tipoIngresso == "pista"){
        comprarPista(quantidadeInput, qtdPista);
    }
    else if(tipoIngresso == "superior"){
        comprarCadeiraSuperior(quantidadeInput, qtdSuperior);
    }
    else if (tipoIngresso == "inferior"){
        comprarCadeiraInferior(quantidadeInput, qtdInferior);
    }
}

function comprarPista(quantidadeInput, qtdPista){
    let qtdFinalPista = qtdPista - quantidadeInput;
    if(qtdFinalPista > 0){
        document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${qtdFinalPista}</span>`;
        alert('Compra realizada com sucesso!')
    }
    else if(qtdFinalPista <= 0){
        qtdFinalPista = qtdPista + quantidadeInput;
        alert('Quantidade indisponivel para pista!');
        }
}

function comprarCadeiraSuperior(quantidadeInput, qtdSuperior){
    let qtdFinalCadeiraSuperior = qtdSuperior - quantidadeInput;
    if(qtdFinalCadeiraSuperior > 0){
        document.getElementById('qtd-superior').innerHTML = `<span id="qtd-superior">${qtdFinalCadeiraSuperior}</span>`
        alert('Compra realizada com sucesso!');
    }
    else if(qtdFinalCadeiraSuperior <= 0){
        qtdFinalCadeiraSuperior = qtdSuperior + quantidadeInput;
        alert('Quantidade indisponivel para cadeira superior!');
    }
}

function comprarCadeiraInferior(quantidadeInput, qtdInferior){
    let qtdFinalCadeiraInferior = qtdInferior - quantidadeInput;
    if(qtdFinalCadeiraInferior > 0){
        document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-inferior">${qtdFinalCadeiraInferior}</span>`
        alert('Compra realizada com sucesso!');
    }
    else if(qtdFinalCadeiraInferior <= 0){
        qtdFinalCadeiraInferior = qtdInferior + quantidadeInput;
        alert('Quantidade indisponivel para cadeira inferior');
    } 
}


