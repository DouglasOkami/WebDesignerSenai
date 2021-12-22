/*
let a = 5;
let b = 8;
let c = 0;

c = a;
a = b;
b = c;

console.log("Valor de a :"+ a);
console.log("Valor de b :"+ b);
*/
let a = 5;
let b = "10";
let c = a + b;
console.log(c);

let peso = parseFloat(prompt("Digite seu Peso"));
let altura = parseFloat(prompt("Digite sua altura"));
let imc = peso/(altura * altura);
alert(`e o seu imc é ${imc}`)