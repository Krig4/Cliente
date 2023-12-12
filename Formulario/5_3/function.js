// Funciones para validar los campos del formulario

function validarDNI(dni, letra) {
  // Obtenemos la tabla de letras del DNI
  const tabla = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

  // Calculamos el módulo del DNI
  const modulo = dni % 23;

  // Comparamos el módulo con la letra
  return tabla[modulo] === letra;
}

function validarCalles(calle, poblacion) {
  // Comprobamos que no estén vacíos
  return calle.length > 0 && poblacion.length > 0;
}

function validarFichero(archivo) {
  // Comprobamos que se haya seleccionado un archivo
  return archivo.files.length > 0;
}

// Función para mostrar los mensajes de error

function mostrarError(error, tipo) {
  // Creamos un mensaje de error
  const mensaje = document.createElement("div");
  mensaje.innerHTML = error;
  mensaje.className = "error";

  // Lo añadimos al DOM
  if (tipo === "modal") {
    // Mostramos una ventana emergente
    const modal = document.querySelector("#modal");
    modal.appendChild(mensaje);
    modal.style.display = "block";
  } else if (tipo === "div") {
    // Añadimos el mensaje al DIV de errores
    const errores = document.querySelector("#errores");
    errores.appendChild(mensaje);
  }
}

// Función para validar el formulario

function validarFormulario() {
  // Obtenemos los datos del formulario
  const dni = document.querySelector("#dni").value;
  const letra = document.querySelector("#letra").value;
  const nombre = document.querySelector("#nom").value;
  const apellidos = document.querySelector("#ape").value;
  const email = document.querySelector("#email").value;
  const calle = document.querySelector("#calle").value;
  const poblacion = document.querySelector("#poblacion").value;
  const archivo = document.querySelector("#archivo").files[0];

  // Validamos los campos
  const errores = [];
  if (dni.length === 0) {
    errores.push("El campo DNI no puede estar vacío");
  } else if (!validarDNI(dni, letra)) {
    errores.push("La letra del DNI no es correcta");
  }
  if (nombre.length === 0) {
    errores.push("El campo Nombre no puede estar vacío");
  }
  if (apellidos.length === 0) {
    errores.push("El campo Apellidos no puede estar vacío");
  }
  if (email.length === 0) {
    errores.push("El campo Email no puede estar vacío");
  } else if (!/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(email)) {
    errores.push("El formato del correo electrónico no es correcto");
  }
  if (!validarCalles(calle, poblacion)) {
    errores.push("Los campos Calle y Población no pueden estar vacíos");
  }
  if (!validarFichero(archivo)) {
    errores.push("El campo Archivo no puede estar vacío");
  }

  // Si hay errores, los mostramos
  if (errores.length > 0) {
    // Mostramos un mensaje de error en una ventana emergente
    mostrarError(errores.join("<br/>"), "modal");
    return false;
  } else {
    // No hay errores, el formulario es válido
    return true;
  }
}

// Eventos

document.querySelector("#enviar").addEventListener("click", validarFormulario);
