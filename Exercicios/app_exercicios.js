function Calculo(){
   let input1 = parseFloat(document.getElementById('campoInput1').value);
   let operador = document.getElementById('operador').value;
   let input2 = parseFloat(document.getElementById('campoInput2').value);

   if(operador == "+"){
      document.getElementById('Resultado').innerHTML = `<span>Resultado:${operadorAdição(input1, input2)} </span>`  
   }
   else if (operador == "-"){
      document.getElementById('Resultado').innerHTML = `<span>Resultado:${operadorSubtração(input1, input2)} </span>`;
   }
   else if (operador == "x"){
      document.getElementById('Resultado').innerHTML = `<span>Resultado:${operadorMultiplicação(input1, input2)} </span>`;
   }
   else if(operador == "/"){
      document.getElementById('Resultado').innerHTML = `<span>Resultado:${operadorDivisão(input1, input2)} </span>`;
   }
   else if(operador == "*"){
      document.getElementById('Resultado').innerHTML = `<span>Resultado:${operadorExponenciação(input1, input2)} </span>`;
   }
}

function operadorAdição(a,b){
   return a + b;
}

function operadorSubtração(a,b){
   return a - b;
}

function operadorMultiplicação(a,b){
   return a * b;
}

function operadorDivisão(a,b){
   return a / b;
}

function operadorExponenciação(a,b){
   return a ** b;
}