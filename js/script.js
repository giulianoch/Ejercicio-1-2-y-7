function myFunction() {
    var numRandom = Math.floor((Math.random() * 10) + 1);
    document.getElementById("print").innerHTML = numRandom;
    var numUsuario = document.getElementById("numUsuario");
    if (numRandom===numUsuario){
        document.getElementById("print2").innerHTML="ADIVINASTE :D";
    }else{
        document.getElementById("print2").innerHTML="NO ADIVINASTE :(";
    }
}
function igualdad(){
    //uso el getElementById para llamar a los numeros que escribo en el campo del html
    var num1 = document.getElementById ("num1").value;
    var num2 = document.getElementById ("num2").value;
    if(num1>num2){
        document.getElementById("igualdad").innerHTML=("El numero "+num1+" es mayor que el"+num2);
    }else if (num1<num2){
        document.getElementById("igualdad").innerHTML=("El numero "+num2+" es mayor que el"+num1);
    }else{
        document.getElementById("igualdad").innerHTML=("Los numeros son iguales");
    }
}
function posNeg(){
    var num3 = document.getElementById ("num3").value;
    if(num3>0){
        document.getElementById("posNeg").innerHTML=("El numero "+num3+" es positivo");
    }else if(num3<0){
        document.getElementById("posNeg").innerHTML=("El numero " +num3+ " es negativo");
    }else{
        document.getElementById("posNeg").innerHTML=("El 0 es un numero neutro");    }
}
