function nMedia(){
    let nome = document.getElementById("nomeUser").value;
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let media = (n1+n2+n3)/3;
    if(media >= 6){
        document.getElementById("Resultado").innerHTML = `${nome} sua média é ${media} <b>APROVADO</b>`;
    }
    else if(media >= 3 && media < 6){
        document.getElementById("Resultado").innerHTML = `${nome} sua média é ${media} <b>EXAME</b>`;
    }else if(media < 3){
        document.getElementById("Resultado").innerHTML = `${nome} sua média é ${media} REPROVADO`;
    }
}