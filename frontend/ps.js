//const { json } = require("body-parser");
//const e = require("express");

var divum = document.getElementById("divum");
var divdois = document.getElementById("divdois");

divum.style.display = 'none';

divdois.style.display = 'block';

function login(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var ErroEmail = document.getElementById("ErroEmail");
    var ErroSenha = document.getElementById("ErroSenha");
    var SucessoLogin = document.getElementById("SucessoLogin");

    if(!email.value || email.value.length < 10){
        ErroEmail.style.color="Red";
        ErroEmail.textContent= "Email Inválido";       
    }else{
        ErroEmail.textContent="";
    }

    if(!senha.value|| senha.value.length < 8){
        ErroSenha.style.color="Red";
        ErroSenha.textContent= "Senha Inválida";        
    }else{
        ErroSenha.textContent="";
    }

    if(email.value && senha.value && senha.value.length >= 8 && email.value.length >= 10){       
        //addlocal();
        mudadiv(); 
        email.value = "";
        senha.value = "";      

    }else{
        SucessoLogin.style.color="Red"; 
        SucessoLogin.textContent="usuario não logado "
    }

}

function  mudadiv(){
    var divum = document.getElementById("divum");
    var divdois = document.getElementById("divdois");
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if ( divum.style.display === 'block'){
        divum.style.display = 'none';
    }else{
        divum.style.display = 'block';
    }

    if ( divdois.style.display === 'block'){
        divdois.style.display = 'none';
    }else{
        divdois.style.display = 'block';
    }

    var bem = document.getElementById("bemvindo");

    const loginn = {
        senha ,
        email}

    const opcao = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(loginn)
    }

    if(divum.style.display === 'block'){

        fetch('http://localhost:3000/login', opcao)
        .then((res) => res.json())
        .then((data) => bem.textContent = data.message)

    }

}

