function clique_botao(){
    alert("Seja bem vindo !!!");
}

function minhaF(){
    document.getElementById("demo").innerHTML = "Olá Galera";
}

function mudarPVermelho(){
    document.getElementById("paragrafo").style.color = 'red';
}
function mudarPVerde(){
    document.getElementById("paragrafo").style.color = 'green';
}

function myButton(){
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.fontSize = "40px";
    document.getElementById("demo").style.background = "yellow";
    document.getElementById("demo").style.fontFamily = "Arial";
}
/*
function calculadora(){
    document.getElementById("resultado").value = parseFloat(document.getElementById("numero1").value) + 
    parseFloat(document.getElementById("numero2").value);
}

function calculadora(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let calcular = n1 + n2;
    document.getElementById("resultado").value = calcular;
}
*/

function coletandoDados(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    somar(n1, n2);
}

function somar(n1, n2){
    let res = n1 + n2;
    imprimirDados(res);
}

function imprimirDados(res){
    document.getElementById("resultado").value = res;
}