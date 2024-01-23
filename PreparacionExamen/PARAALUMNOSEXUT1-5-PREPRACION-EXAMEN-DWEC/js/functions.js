function validarFormulario() {
    let newWin = window.open("", "", "width=300, height=300");
    newWin.document.write("<!DOCTYPE html><html><head><title>Errores</title></head><body>");

    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let company = document.getElementById("empresa");
    let cargo = document.getElementById("cargo");

    if (name.value === '') {
        newWin.document.write("<p>Falta el nombre</p>");
        var errornombre = document.getElementById("errornombre");
        errornombre.textContent = "Falta el nombre";
    }

    var espacioBlanco = surname.value.split(' ').length - 1;
    if (espacioBlanco !== 1) {
        newWin.document.write("<p>Faltan DOS apellidos</p>");
        var errorapellido = document.getElementById("errorapellido");
        errorapellido.textContent = "Faltan DOS apellidos";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        newWin.document.write("<p>Por favor, ingrese una dirección de correo electrónico válida.</p>");
        var erroremail = document.getElementById("erroremail");
        erroremail.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
    }

    if (tel.value.trim() === '' || tel.value.length !== 9) {
        newWin.document.write("<p>Por favor, ingresa un número de teléfono válido (9 dígitos).</p>");
        var errortel = document.getElementById("errortel");
        errortel.textContent = "Por favor, ingresa un número de teléfono válido (9 dígitos).";
    }

    if (company.value.trim() === '') {
        newWin.document.write("<p>El campo empresa es obligatorio</p>");
        var errorempresa = document.getElementById("errorempresa");
        errorempresa.textContent = "El campo empresa es obligatorio";
    }

    if (cargo.value === "cargoocupa") {
        newWin.document.write("<p>Por favor, selecciona un cargo.</p>");
        var errorcargo = document.getElementById("errorcargo");
        errorcargo.textContent = "Por favor, selecciona un cargo.";
    }

    newWin.document.write("</body></html>");
    newWin.document.close();
}
