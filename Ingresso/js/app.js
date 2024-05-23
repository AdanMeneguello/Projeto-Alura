function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeInput = document.getElementById('qtd').value;
    
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    let qtdInferior = document.getElementById('qtd-inferior').textContent;

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
    else if(tipoIngresso == "Cadeira superior"){
        let qtdFinalCadeiraSuperior = qtdSuperior - quantidadeInput;
        document.getElementById('qtdSuperior').innerHTML = `<span id="qtd-superior">${qtdFinalCadeiraSuperior}</span></li>`
    }
}