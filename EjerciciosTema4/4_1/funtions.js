function convertToDecimal() {
    var inputValue = document.getElementById("inputValue").value;
    var decimalValue;
    if (inputValue.startsWith("0x")) {
        // Convertir valor hexadecimal a decimal
        decimalValue = parseInt(inputValue, 16);
    } else {
        // Convertir valor octal a decimal
        decimalValue = parseInt(inputValue, 8);
    }
    var resultElement = document.getElementById("result");
    resultElement.textContent = "El equivalente en base decimal es: " + decimalValue;
}
function Sumar(num1,num2) {
    num1 = parseInt(prompt("Introduce el primer número"));
    num2 = parseInt(prompt("Introduce el segundo número"));
    var total = num1 + num2;
    var resultElement = document.getElementById("result");
    resultElement.textContent = "El resultado de la suma es: " + total;
}
function Print(array) {
    var resultDiv = document.getElementById("result"); // Obtener el elemento <div> por su id
    for (let i = 0; i < array.length; i++) {
        resultDiv.innerHTML += array[i] + " "; // Agregar el contenido al <div>
    }
}
function Meses() {
    var mesesDelAnio = new Array(
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    );
    var meses = [mesesDelAnio[0], mesesDelAnio[3], mesesDelAnio[11]];
    Print(meses);
}
document.addEventListener("DOMContentLoaded", function() {
    var elementos = [];
    
    while (true) {
        var valor = prompt("Introduce un valor numérico (0 para finalizar):");
        var numero = parseFloat(valor);
        
        if (isNaN(numero)) {
            alert("¡Por favor, introduce un valor numérico válido!");
            continue;
        }
        
        if (numero === 0) {
            break;
        }
        
        elementos.push(numero);
        alert("Número de elementos introducidos: " + elementos.length);
    }
});

