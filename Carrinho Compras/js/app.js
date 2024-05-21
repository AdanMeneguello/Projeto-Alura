let totalGeralValor = 0;
document.getElementById("lista-produtos").innerHTML = '';
document.getElementById("valor-total").textContent = 'R$ 0';

function adicionar(){
    //recuperar o produto, quantidade e o valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    //calcular o subtotal
    let subtotal = quantidade * valorProduto
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`

    //atualizar o valor total.
    totalGeralValor = totalGeralValor + subtotal;
    let campoTexto = document.getElementById("valor-total");
    campoTexto.innerHTML = `<p class="carrinho__total">R$${totalGeralValor}<span class="texto-azul" id="valor-total"></span>
  </p> `

    document.getElementById('quantidade').value = '';
}

function limpar(){
    document.getElementById('quantidade').value = ' ';
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById("valor-total").textContent = 'R$ 0';
    totalGeralValor = 0;
    document.getElementById("produto").value = 0;
    document.getElementById('quantidade').value = 0;  
}