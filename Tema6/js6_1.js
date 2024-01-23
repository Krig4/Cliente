function mostrarNodos(node, level) {
    var tipoNodo = node.nodeType;
    alert("Tipo de Nodo: " + tipoNodo);
    for (var i = 0; i < node.childNodes.length; i++) {
      mostrarNodos(node.childNodes[i], level + 1);
    }
  }
  
  function agregarElemento() {
    // Crear un nuevo elemento div
    var nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Nuevo Elemento";
  
    // Agregar el nuevo div al contenedor
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(nuevoDiv);
  }
  
  var nodoRaiz = document.body;
  mostrarNodos(nodoRaiz, 0);
  // script.js
  function cambiarEstilo(celda) {
    // Lista de colores al azar
    var colores = ["red", "blue", "green", "yellow", "purple", "orange"];

    // Obtener un color al azar
    var colorAzar = colores[Math.floor(Math.random() * colores.length)];

    // Cambiar el fondo de la celda al color obtenido
    celda.style.backgroundColor = colorAzar;
  }

  // Función para cambiar el estilo al azar de todas las celdas
  function cambiarEstiloAlAzar() {
    // Obtener todas las celdas
    var celdas = document.getElementsByClassName("celda");

    // Cambiar el estilo de cada celda al azar
    for (var i = 0; i < celdas.length; i++) {
      cambiarEstilo(celdas[i]);
    }
  }
