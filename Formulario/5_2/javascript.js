function enviarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    // Validar las condiciones
    if (nombre.length >= 10 && /\s{2,}/.test(nombre) &&
        edad >= 16 && edad <= 65 &&
        telefono.length === 9 && telefono.startsWith("9") &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Todo está correcto, mostrar ventana de alerta
        alert("¡Envío ejecutado correctamente!");
    } else {
        // Mostrar ventana de alerta con los errores
        var errores = "Errores:\n";
        if (!(nombre.length >= 10 && /\s{2,}/.test(nombre))) {
            errores += "- El campo nombre debe tener al menos 10 caracteres y 2 blancos mínimos.\n";
        }
        if (!(edad >= 16 && edad <= 65)) {
            errores += "- El campo edad debe tener valores entre 16 y 65.\n";
        }
        if (!(telefono.length === 9 && telefono.startsWith("9"))) {
            errores += "- El campo teléfono debe tener 9 dígitos y el primero por la izquierda debe ser un 9.\n";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errores += "- El campo correo debe cumplir las reglas de formación de direcciones de correo electrónico.\n";
        }
        alert(errores);
    }
}

function resetFormulario() {
    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
}