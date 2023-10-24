function DNI() {
    var dni = prompt('Introduce tu DNI sin letra: ');
    var letra = dni % 23;
    var resultado = "";

    switch (letra) {
        case 0:
            resultado = 'Tu DNI es ' + dni + 'T';
            break;
        case 1:
            resultado = 'Tu DNI es ' + dni + 'R';
            break;
        case 2:
            resultado = 'Tu DNI es ' + dni + 'W';
            break;
        case 3:
            resultado = 'Tu DNI es ' + dni + 'A';
            break;
        case 4:
            resultado = 'Tu DNI es ' + dni + 'G';
            break;
        case 5:
            resultado = 'Tu DNI es ' + dni + 'M';
            break;
        case 6:
            resultado = 'Tu DNI es ' + dni + 'Y';
            break;
        case 7:
            resultado = 'Tu DNI es ' + dni + 'F';
            break;
        case 8:
            resultado = 'Tu DNI es ' + dni + 'P';
            break;
        case 9:
            resultado = 'Tu DNI es ' + dni + 'D';
            break;
        case 10:
            resultado = 'Tu DNI es ' + dni + 'X';
            break;
        case 11:
            resultado = 'Tu DNI es ' + dni + 'B';
            break;
        case 12:
            resultado = 'Tu DNI es ' + dni + 'N';
            break;
        case 13:
            resultado = 'Tu DNI es ' + dni + 'J';
            break;
        case 14:
            resultado = 'Tu DNI es ' + dni + 'Z';
            break;
        case 15:
            resultado = 'Tu DNI es ' + dni + 'S';
            break;
        case 16:
            resultado = 'Tu DNI es ' + dni + 'Q';
            break;
        case 17:
            resultado = 'Tu DNI es ' + dni + 'V';
            break;
        case 18:
            resultado = 'Tu DNI es ' + dni + 'H';
            break;
        case 19:
            resultado = 'Tu DNI es ' + dni + 'L';
            break;
        case 20:
            resultado = 'Tu DNI es ' + dni + 'C';
            break;
        case 21:
            resultado = 'Tu DNI es ' + dni + 'K';
            break;
        case 22:
            resultado = 'Tu DNI es ' + dni + 'E';
            break;
        default:
            resultado = 'El número DNI introducido no es válido';
    }

    document.getElementById("resultado").textContent = resultado;
}

function ContarPalabras() {
    var palabras = prompt('Introduce una frase: ');
    textoAreaDividido = palabras.split(" ");
    numeroPalabras = textoAreaDividido.length;
    document.getElementById("resultado").textContent = 'El número de palabras que contiene la frase es: ' + numeroPalabras;
}

function SoloNumeros() {
    var texto = prompt('Introduce una frase: ');
    var resultado = "";

    if (isNaN(texto)) {
        resultado = 'Esta frase no es un número';
    } else {
        resultado = 'Es solo números';
    }

    document.getElementById("resultado").textContent = resultado;
}

function ContieneLetras() {
    var frase = prompt('Introduce una frase: ');
    var regex = /^[a-zA-Z\s]*$/;
    var resultado = "";

    if (regex.test(frase)) {
        resultado = "La cadena contiene solo letras y espacios.";
    } else {
        resultado = "La cadena contiene caracteres no permitidos.";
    }

    document.getElementById("resultado").textContent = resultado;
}

function Right(cadena, total) {
    return cadena.slice(-total);
  }

  // Función para extraer caracteres por la izquierda
  function Left(cadena, total) {
    return cadena.slice(0, total);
  }

  // Función para extraer un número de caracteres desde una posición dada
  function Mid(cadena, inicio, total) {
    return cadena.slice(inicio, inicio + total);
  }

  function extraerDerecha() {
    var frase = prompt("Introduce una frase:");
    var total = parseInt(prompt("Introduce la cantidad de caracteres a extraer por la derecha:"));
    var resultado = Right(frase, total);
    document.getElementById("resultado").textContent = resultado;
  }

  function extraerIzquierda() {
    var frase = prompt("Introduce una frase:");
    var total = parseInt(prompt("Introduce la cantidad de caracteres a extraer por la izquierda:"));
    var resultado = Left(frase, total);
    document.getElementById("resultado").textContent = resultado;
  }

  function extraerMedio() {
    var frase = prompt("Introduce una frase:");
    var inicio = parseInt(prompt("Introduce la posición de inicio:"));
    var total = parseInt(prompt("Introduce la cantidad de caracteres a extraer en el medio:"));
    var resultado = Mid(frase, inicio, total);
    document.getElementById("resultado").textContent = resultado;
  }
  function redondear() {
    var numeroTexto = prompt("Introduce el número que quieres redondear:");
    var decimales = prompt("Cuantos decimales quieres redondear");
    var ndecimales = parseFloat(decimales);
    var numero = parseFloat(numeroTexto);

    if (!isNaN(numero)) {
        var numeroRedondeado = numero.toFixed(ndecimales);
        document.getElementById("resultado").textContent = numeroRedondeado;
    } else {
        alert("Entrada no válida. Asegúrate de ingresar un número.");
    }
    function validarEmail() {
        document.getElementById("enviarButton").addEventListener("click", function(event) {
            var email = document.getElementById("email").value;
            var atSymbolIndex = email.indexOf("@");
            var dotSymbolIndex = email.lastIndexOf(".");
        
            if (atSymbolIndex < 1 || dotSymbolIndex < atSymbolIndex + 2 || dotSymbolIndex + 2 >= email.length) {
                alert("Email no válido. Por favor, introduce una dirección de correo válida.");
                event.preventDefault(); // Evita que el formulario se envíe
            }
        });
    }
  }
  
