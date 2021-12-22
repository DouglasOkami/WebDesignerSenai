function corFundo(){
    document.querySelector("body").style.backgroundColor="red"; 
}

function imgTroca(){
    document.querySelector("#faustaoIMG").src = "/image/Evening.jpg";
}

function tudo(){
let corBody = prompt("Digite uma cor em inglês ex:blue para alterar a cor do fundo");
document.querySelector("body").style.backgroundColor= `${corBody}`; 
  
}