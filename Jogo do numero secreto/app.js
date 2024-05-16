alert('Boas vindas ao jogo secreto!');
let chute;
let tentativas = 1;
let dificuldade;
let numeroSecreto;
let rangeNumeroSecreto;
let tentativasRestantes;
let gameOver = false;

while(dificuldade != 1, dificuldade != 2, dificuldade != 3){
    dificuldade = parseInt(prompt(' Selecione sua dificuldade:  1 - Facil , 2 - Medía , 3 - Dificíl'));
    if(dificuldade == 1 || dificuldade == 2 || dificuldade == 3){
        break;
    }else{
        alert("Dificuldade invalida, por favor, tente novamente. ");
    }
}

if(dificuldade == 1){
    rangeNumeroSecreto = 10;
    numeroSecreto = parseInt(Math.random() * rangeNumeroSecreto);
    console.log(numeroSecreto);
    tentativasRestantes = 6;
    alert(`Você selecionou o nível FÁCIL, lembre-se, você tem apenas ${tentativasRestantes} tentativas`);
    
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre 1 e ${rangeNumeroSecreto}:`);
        
        if(chute == numeroSecreto){
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
            break;
        }else{
            if(chute > numeroSecreto){
                alert(`Seu chute ${chute} é maior que o número secreto.`);
            }else if(chute < numeroSecreto) {
                alert(`Seu chute ${chute} é menor que o número secreto `);
            }
            tentativas++;
            tentativasRestantes -= 1;


            if(tentativas > 6){
                gameOver = true;
                alert(`Game over - O número secreto era ${numeroSecreto}.`);
                break;
            }
        }
    }
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(gameOver == true){
        alert("Atualize a página para jogar novamente!");
    }else if(gameOver == false || chute == numeroSecreto){
        alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    }
}

else if(dificuldade == 2){
    rangeNumeroSecreto = 10;
    let numeroSecreto = parseInt(Math.random() * rangeNumeroSecreto);
    console.log(numeroSecreto);
    tentativasRestantes = 5;
    alert(`Você selecionou o nível MÉDIO, lembre-se, você tem apenas ${tentativasRestantes} tentativas`);
    
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre 1 e ${rangeNumeroSecreto}:`);
        
        if(chute == numeroSecreto){
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
            break;
        }else{
            if(chute > numeroSecreto){
                alert(`Seu chute ${chute} é maior que o número secreto.`);
            }else if(chute < numeroSecreto) {
                alert(`Seu chute ${chute} é menor que o número secreto `);
            }

            tentativas++;
            tentativasRestantes -= 1;

            if(tentativas > 5){
                gameOver = true;
                alert(`Game over - O número secreto era ${numeroSecreto}.`);
                break;
            }
        }
    }
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(gameOver == true){
        alert("Atualize a página para jogar novamente!");
    }else if(gameOver == false || chute == numeroSecreto){
        alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    }
}

else if(dificuldade == 3){
    rangeNumeroSecreto = 20;
    let numeroSecreto = parseInt(Math.random() * rangeNumeroSecreto);
    console.log(numeroSecreto);
    tentativasRestantes = 5;
    alert(`Você selecionou o nível DIFÍCIL, lembre-se, você tem apenas ${tentativasRestantes} tentativas`);
    
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre 1 e ${rangeNumeroSecreto}:`);
        
        if(chute == numeroSecreto){
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
            break;
        }else{
            if(chute > numeroSecreto){
                tentativasRestantes = 5;
                alert(`Seu chute ${chute} é maior que o número secreto.
                    Tentativas restantes: ${tentativasRestantes}.`);
            }else if(chute < numeroSecreto) {
                alert(`Seu chute ${chute} é menor que o número secreto.
                    Tentavas restantes: ${tentativasRestantes}.`);
            }
            tentativas++;
            tentativasRestantes -= 1;
            
            if(tentativas > 5){
                gameOver = true;
                alert(`Game over - O número secreto era ${numeroSecreto}.`);
                break;
            }
        }
    }
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(gameOver == true){
        alert("Atualize a página para jogar novamente!");
    }else if(gameOver == false || chute == numeroSecreto){
        alert(`Isso ai! Você aceitou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    }
}