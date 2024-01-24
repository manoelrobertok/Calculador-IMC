

const calcular = document.getElementById('calcular');
/*Variável global, referente ao botão calcular*/


function imc(){
  /*  alert('teste') - Testando o click*/
  /* ".value" O valor que for atribuído */

  const nome = document.getElementById('nome').value ;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value ;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '' ){    
    /*Se o nome, altura e peso, for diferente de vazio, faça isso*/

     const valorIMC = (peso / (altura * altura)).toFixed(1);

     let classificacao = " ";

    if(valorIMC <= 18.5){
        classificacao = 'muito abaixo do peso!';
    }

    else if(valorIMC < 24.9){
        classificacao = 'com o peso ideal!';
    }

    else if(valorIMC < 30){
        classificacao = 'acima do peso!';
    }

    else if(valorIMC < 34.9){
        classificacao = 'com obesidade grau I!';
    }

    else if(valorIMC < 40){
        classificacao = 'com obesidade grau II!';
    }

    else if(valorIMC > 40){
        classificacao = 'com obesidade grau III!';
    }

    resultado.textContent = `${nome}, seu imc é de ${valorIMC}.Você está ${classificacao}`;

    /*Os dados obtidos serão apresentados no campo de resultados*/
  
}

  else{/* - validação */
    resultado.textContent= 'Preencha todos os campos acima!';
   
  }
  

}



calcular.addEventListener('click', imc);
;