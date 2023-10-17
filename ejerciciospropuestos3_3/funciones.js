function DNI() {
    var dni = prompt('Intoduce tu DNI sin letra: ');
    var letra = dni % 23;
    switch (letra) {
        case 0:
            alert('Tu DNI es ' + dni + 'T');
            break;
        case 1:
            alert('Tu DNI es ' + dni + 'R');
            break;
        case 2:
            alert('Tu DNI es ' + dni + 'W');
            break;
        case 3:
            alert('Tu DNI es ' + dni + 'A');
            break;
        case 4:
            alert('Tu DNI es ' + dni + 'G');
            break;
        case 5:
            alert('Tu DNI es ' + dni + 'M');
            break;
        case 6:
            alert('Tu DNI es ' + dni + 'Y');
            break;
        case 7:
            alert('Tu DNI es ' + dni + 'F');
            break;
        case 8:
            alert('Tu DNI es ' + dni + 'P');
            break;
        case 9:
            alert('Tu DNI es ' + dni + 'D');
            break;
        case 10:
            alert('Tu DNI es ' + dni + 'X');
            break;
        case 11:
            alert('Tu DNI es ' + dni + 'B');
            break;
        case 12:
            alert('Tu DNI es ' + dni + 'N');
            break;
        case 13:
            alert('Tu DNI es ' + dni + 'J');
            break;
        case 14:
            alert('Tu DNI es ' + dni + 'Z');
            break;
        case 15:
            alert('Tu DNI es ' + dni + 'S');
            break;
        case 16:
            alert('Tu DNI es ' + dni + 'Q');
            break;
        case 17:
            alert('Tu DNI es ' + dni + 'V');
            break;
        case 18:
            alert('Tu DNI es ' + dni + 'H');
            break;
        case 19:
            alert('Tu DNI es ' + dni + 'L');
            break;
        case 20:
            alert('Tu DNI es ' + dni + 'C');
            break;
        case 21:
            alert('Tu DNI es ' + dni + 'K');
            break;
        case 22:
            alert('Tu DNI es ' + dni + 'E');
            break;
        default:
            alert('El número DNI introducido no es valido');
    }
}
function ContarPalabras() {
    var palabras = prompt('Introduce una frase: ');
    textoAreaDividido = palabras.split(" ");
    numeroPalabras = textoAreaDividido.length;
    alert('El número de palabras que contiene la frase es: ' + numeroPalabras);
}
function SoloNumeros() {
    var texto = prompt('Introduce una frase: ');
    if (isNaN(texto)) {
        alert('Esta frase no es un número');
    } else {
        alert('Es solo números');
    }
}
function ContieneLetras() {
    var frase = prompt('Introduce una frase: ');
    var regex = /^[a-zA-Z\s]*$/;

    if (regex.test(frase)) {
        alert("La cadena contiene solo letras y espacios.");
    } else {
        alert("La cadena contiene caracteres no permitidos.");
    }
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
