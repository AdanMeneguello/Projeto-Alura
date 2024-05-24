function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeInput = document.getElementById('qtd').value;
    
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(tipoIngresso == "pista"){
        let qtdFinalPista = qtdPista - quantidadeInput;
        if(qtdFinalPista > 0){
            document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${qtdFinalPista}</span>`;
        }
        else if(qtdFinalPista <= 0){
            qtdFinalPista = qtdPista + quantidadeInput;
            alert('Quantidade indisponivel para pista!');
        }
    }

    if(tipoIngresso == "superior"){
        let qtdFinalCadeiraSuperior = qtdSuperior - quantidadeInput;
        if(qtdFinalCadeiraSuperior > 0){
            document.getElementById('qtd-superior').innerHTML = `<span id="qtd-superior">${qtdFinalCadeiraSuperior}</span>`;
        }
        else if(qtdFinalCadeiraSuperior <= 0){
            qtdFinalCadeiraSuperior = qtdSuperior + quantidadeInput;
            alert('Quantidade indisponivel para cadeira superior!');
        }
    }

    if(tipoIngresso == "inferior"){
        let qtdFinalCadeiraInferior = qtdInferior - quantidadeInput;
        if(qtdFinalCadeiraInferior > 0){
            document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-inferior">${qtdFinalCadeiraInferior}</span>`
        }
        else if(qtdFinalCadeiraInferior <= 0){
            qtdFinalCadeiraInferior = qtdInferior + quantidadeInput;
            alert('Quantidade indisponivel para cadeira inferior');
        } 
    }
}