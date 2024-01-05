var divum = document.getElementById("divum");
var divdois = document.getElementById("divdois");

divum.style.display = 'none';

divdois.style.display = 'block';

function deslogar(a){
    localStorage.clear()
    mudadiv();

}

function login(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var nome = document.getElementById("nome");
    var ErroEmail = document.getElementById("ErroEmail");
    var ErroSenha = document.getElementById("ErroSenha");
    var ErroNome = document.getElementById("ErroNome");

    if(!nome.value || nome.value.length < 3){
        ErroNome.style.color="Red";
        ErroNome.textContent= "Nome Inválido";        
    }else{
        ErroNome.textContent="";
    }

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

    if(nome.value && email.value && senha.value && senha.value.length >= 8 && email.value.length >= 10 && nome.value.length >= 3){
        addlocal();
        email.value = "";
        senha.value = "";
        nome.value = "";
        mudadiv();
    }

}

function  mudadiv(){
    var divum = document.getElementById("divum");
    var divdois = document.getElementById("divdois");
    
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
    bem.textContent = "Bem vindo " + localStorage.getItem('usuario');

    var conselhod = document.getElementById("conselho");

    // fetch('https://api.adviceslip.com/advice' , {
    //     method : "GET"
    // })
    //     .then(response => { return response.json()})
    //     .then(data => {return conselhod.textContent = 'o conselho do dia é '+ data.slip.advice})
 
    fetch('http://localhost:3000' , {
        method : "GET"
    })
        .then(response => { return response.json()})
        .then(data => {return conselhod.textContent = 'o conselho do dia é '+ data.name})



}

function addlocal(){
    var nome = document.getElementById("nome");
    localStorage.setItem('usuario', nome.value);    
}