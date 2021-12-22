function imc(){
    let nome = document.getElementById("nomeUser").value;
    let peso = parseFloat(document.getElementById("tPeso").value);
    let altura = parseFloat(document.getElementById("tAltura").value);
    let imc = peso/(altura * altura);
    document.getElementById("Resultado").innerHTML = `${nome} seu imc é ${imc}`;
}