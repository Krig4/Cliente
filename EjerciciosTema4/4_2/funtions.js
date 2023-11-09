var array = ['4', '7', '24', '33', '57', '80'];
function ShowArray() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = array.join(" ");  
}
function Flip() {
    var resultDiv = document.getElementById("result");
    var reversed = array.slice().reverse().join(" "); // Usamos slice() para crear una copia del array original
    resultDiv.innerHTML = reversed;
}
function DeleteFirst() {
    var resultDiv = document.getElementById("result");
    array.shift(); // Elimina el primer elemento
    resultDiv.innerHTML = array.join(" ");
}

function DeleteLast() {
    var resultDiv = document.getElementById("result");
    array.pop(); // Elimina el último elemento
    resultDiv.innerHTML = array.join(" ");
}

function AddFirst() {
    var resultDiv = document.getElementById("result");
    var newValue = prompt("Ingrese un valor para agregar al principio:");
    array.unshift(newValue); // Agrega al principio
    resultDiv.innerHTML = array.join(" ");
}

function AddLast() {
    var resultDiv = document.getElementById("result");
    var newValue = prompt("Ingrese un valor para agregar al final:");
    array.push(newValue); // Agrega al final
    resultDiv.innerHTML = array.join(" ");
}

function DeleteMiddleElement() {
    var resultDiv = document.getElementById("result");
    var index = prompt("Ingrese la posición del elemento a eliminar (0 - " + (array.length - 1) + "):");
    index = parseInt(index);

    if (index >= 0 && index < array.length) {
        array.splice(index, 1); // Elimina el elemento en la posición especificada
        resultDiv.innerHTML = array.join(" ");
    } else {
        alert("Posición inválida");
    }
}
