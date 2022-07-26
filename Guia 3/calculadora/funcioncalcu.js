var num1;
var num2;
var tipo;

function init (){

    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var porcentj = document.getElementById("porcentaje");
    var rz = document.getElementById("raiz");
    var x2 = document.getElementById("cuadrado");

    var igual = document.getElementById("igual");
    var resultado = document.getElementById("resultado");


    cero.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "0";
    }

    uno.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick = function(mostrar){
        resultado.textContent = resultado.textContent + "9";
    }

    suma.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "+";
        limpiar();
    }

    resta.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "-";
        limpiar();
    }

    division.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "/";
        limpiar();
    }

    multiplicacion.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "*";
        limpiar();
    }

    porcentj.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "%";
        limpiar();
    }

    rz.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "sqrt";
    }

    x2.onclick = function(mostrar){
        num1 = resultado.textContent;
        tipo = "cuadrado";
    }

    igual.onclick = function(mostrar){
        num2 = resultado.textContent;
        operacion();
    }   

    reset.onclick = function(mostrar){
        resetear();
    }


    function limpiar (){
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        num1 = 0;
        num2 = 0;
        tipo = "";
    }

    function operacion(){
        var ressult = 0;
        switch(tipo){

            case "+":
                ressult = parseFloat(num1) + parseFloat(num2);
            break;

            case "-":
                ressult = parseFloat(num1) - parseFloat(num2);
            break;

            case "*":
                ressult = parseFloat(num1) * parseFloat(num2);
            break;

            case "/":
                ressult = parseFloat(num1) / parseFloat(num2);
            break;

            case "%":
                ressult = parseFloat(num1) % parseFloat(num2);
            break;

            case "sqrt":
                ressult = Math.sqrt(num1); 
            break;

            case "cuadrado":
                ressult = Math.pow(num1, 2); 
            break;
            
            default: "error";
        }
        resetear();
        resultado.textContent = ressult;
    }
}