'use strict'
    
    var btazul = document.getElementById('btazul');
    var btverde = document.getElementById('btverde');
    var btlaranja = document.getElementById('btlaranja');
    var textoH2 = document.querySelector('#textos');
    //alert("Funcionou!");

<<<<<<< HEAD
// btazul.onmouseover = () => document.body.style.backgroundColor = "blue"; 
// btazul.onclick = () => textoH2.textContent = 'Azul Significa Harmonia';
// btverde.onmouseover = () => document.body.style.backgroundColor = "green"; 
// btverde.onclick = () => textoH2.textContent = 'Verde Significa Saúde e Esperança';
// btlaranja.onmouseover = () => document.body.style.backgroundColor = "orange";
// btlaranja.onclick = () => textoH2.textContent = 'Laranja Significa Força e Energia';


    
    

btazul.addEventListener('click' , function(){
       // document.className = '' //Limpar Classe (versao mais simples)
        document.body.classList.remove('btverde' , 'btlaranja');
        document.body.classList.add('btazul');
        textoH2.textContent = 'Azul Significa Harmonia e Maturidade';
        
    });
    
    
    
    btverde.addEventListener('click' , function(){
       // document.className = '' //Limpar Classe (versao mais simples)
        document.body.classList.remove('btazul' , 'btlaranja');
        document.body.classList.add('btverde');
        textoH2.textContent =  'Verde Significa Saude e Esperanca';
        
    });

    btlaranja.addEventListener('click' , function(){
        //document.className = '' //Limpar Classe (versao mais simples)
        document.body.classList.remove('btverde' , 'btazul');
        document.body.classList.add('btlaranja');
       textoH2.textContent = 'Laranja Significa Forca e Energia';
              
        
    });
=======
btnAzul.onmouseover = () => document.body.style.backgroundColor = "blue"; 
btnAzul.onclick = () => textoH2.textContent = 'Azul Significa Harmonia';
btnVerde.onmouseover = () => document.body.style.backgroundColor = "green"; 
btnVerde.onclick = () => textoH2.textContent = 'Verde Significa Saúde e Esperança';
btnLaranja.onmouseover = () => document.body.style.backgroundColor = "orange";
btnLaranja.onclick = () => textoH2.textContent = 'Laranja Significa Força e Energia';


    // btazul.addEventListener('click' , function(){
    //    // document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btverde' , 'btlaranja');
    //     document.body.classList.add('btazul');
    //     textoH2.textContent = 'Azul Significa Harmonia e Maturidade';
        
    // });
    
    
    
    // btverde.addEventListener('click' , function(){
    //    // document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btazul' , 'btlaranja');
    //     document.body.classList.add('btverde');
    //     textoH2.textContent =  'Verde Significa Saude e Esperanca';
        
    // });
    
    
    
    // btlaranja.addEventListener('click' , function(){
    //     //document.className = '' //Limpar Classe (versao mais simples)
    //     document.body.classList.remove('btverde' , 'btazul');
    //     document.body.classList.add('btlaranja');
    //    textoH2.textContent = 'Laranja Significa Forca e Energia';
              
        
    // });
>>>>>>> 2bb3c09b336cb1de8b8fb9b6460ff11ba6cffcb1
