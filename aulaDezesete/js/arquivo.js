function calsal(){
    let sal = Number(document.getElementById('idsal').value);
    let nsal;
    nsal = sal + ((sal*25)/100)
    document.getElementById('idnsal').value = nsal;
}

function Media(){
    let nota1 = Number(document.getElementById('idnota1').value);
    let nota2 = Number(document.getElementById('idnota2').value);
    let nota3 = Number(document.getElementById('idnota3').value);
    let nota4 = Number(document.getElementById('idnota4').value);
    let mediaAluno;
    mediaAluno = (nota1 + nota2 + nota3 + nota4)/4;
    document.getElementById('idmedia').value = mediaAluno;
}

function ndobro(){
    let numero = parseInt(document.getElementById('num').value);
    document.getElementById('dnum').value = numero * 2;
}

function nsoma(){
    let nume1 = Number(document.getElementById('num1').value);
    let nume2 = Number(document.getElementById('num2').value);
    let soma;
    soma = nume1 + nume2;
    document.getElementById('resultado').value = soma;
}

function nquadrado(){
    let nume1 = Number(document.getElementById('num1').value);
    let quadrado;
    quadrado = nume1 * nume1;
    document.getElementById('resultado').value = quadrado;
}

function nsomaT(){
    let nume1 = Number(document.getElementById('num1').value);
    let nume2 = Number(document.getElementById('num2').value);
    let nume3 = Number(document.getElementById('num3').value);
    let soma;
    soma = nume1 + nume2 + nume3;
    document.getElementById('resultado').value = soma;
}

function narea(){
    let base = Number(document.getElementById('num1').value);
    let altura = Number(document.getElementById('num2').value);
    let areaT;
    areaT = (base * altura)/2;
    document.getElementById('resultado').value = areaT;
}