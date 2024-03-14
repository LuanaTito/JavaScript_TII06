'use strict'
    
    var btazul = document.getElementById('btazul');
    var btverde = document.getElementById('btverde');
    var btlaranja = document.getElementById('btlaranja');
    var textoH2 = document.querySelector('#textos');
    //alert("Funcionou!");

    
    btazul.onclick = textoH2.textContent = 'Azul Significa Harmonia';

    btazul.onclick =document.body.classList.remove('btverde' , 'btlaranja');
    btazul.onclick =document.body.classList.add('btazul');
    
    //btazul.addEventListener('click' , function(){
       // document.className = '' //Limpar Classe (versao mais simples)
        //document.body.classList.remove('btverde' , 'btlaranja');
        //document.body.classList.add('btazul');
        //textoH2.textContent = 'Azul Significa Harmonia e Maturidade';
        
   // });
    
    
    
    // btverde.addEventListener('click' , function(){
    //    // document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btazul' , 'btlaranja');
    //     document.body.classList.add('btverde');
        
        
    //     textoH2.textContent =  'Verde Significa Saúde e Esperanca';
        
    // });
    
    
    
    // btlaranja.addEventListener('click' , function(){
    //     //document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btverde' , 'btazul');
    //     document.body.classList.add('btlaranja');
        
    //    textoH2.textContent = 'Laranja Significa Forca e Energia';
              
        
    // });