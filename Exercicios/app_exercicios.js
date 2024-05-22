function capturarValores(){
   let nome = document.getElementById('campoNome').value;
   let idade = document.getElementById('campoIdade').value;
   
   let mostraNome = document.getElementById('mostraNome'); 
   mostraNome.innerHTML = `<span>Nome: ${nome} - Idade: ${idade}</span>`
}