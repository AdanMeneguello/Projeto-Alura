function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeGame = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains("dashboard__item__img--rented")){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        nomeGame.classList.remove("dashboard__item__name--darker")
        botao.textContent = 'Alugar'
    }else{
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return")
        nomeGame.classList.add("dashboard__item__name--darker")
        botao.textContent = 'Devolver'
    }
}

