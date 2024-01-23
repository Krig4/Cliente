function validarFormulario() {
    let newWin = window.open("", "", "width=300, height=300");
    newWin.document.write("<!DOCTYPE html><html><head><title>Errores</title></head><body>");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let numero = document.getElementById("numero");
    let hora = document.getElementById("hora");
    let check = document.getElementById("check");
    let fecha = document.getElementById("fecha");

    var espacioBlanco = surname.value.split(' ').length - 1;
    if (espacioBlanco !== 1) {
        newWin.document.write("<p>Nombre separado de apellidos</p>");
        var errorapellido = document.getElementById("errorapellido");
        errorapellido.textContent = "Nombre separado de apellidos";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        newWin.document.write("<p>Por favor, ingrese una dirección de correo electrónico válida.</p>");
        var erroremail = document.getElementById("erroremail");
        erroremail.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
    }

    if (!(numero.value >= 1 && numero.value <= 99)) {
        newWin.document.write("<p>El número de asistentes tiene que ser de 1 a 99</p>");
        var errorasistente = document.getElementById("errorasistente");
        errorasistente.textContent = "El número de asistentes tiene que ser de 1 a 99";
    }

    if (!(hora.value >= 8 && hora.value <= 21)) {
        newWin.document.write("<p>La hora escrita no es posible</p>");
        var errorhora = document.getElementById("errorhora");
        errorhora.textContent = "La hora escrita no es posible";
    }

    var isChecked = check.checked;
    if (!(isChecked)) {
        newWin.document.write("<p>Por favor, acepta las condiciones de reserva.</p>");
        var errorcheck = document.getElementById("errorcheck");
        errorcheck.textContent = "Por favor, acepta las condiciones de reserva.";
    }

    var fechaactual = new Date();
    fechaactual.setTime(fechaactual.getTime());
    if (fecha.value < fechaactual) {
        newWin.document.write("<p>La fecha tiene que ser a futuro.<p>");
        var errorreserva = document.getElementById("errorreserva");
        errorreserva.textContent = "Por favor, elige una fecha valida";
    }

    setCookie("email", email.value, 1);
    setCookie("fecha", fecha.value, 1);
    setCookie("hora", hora.value, 1);

    newWin.document.write("</body></html>");
    newWin.document.close();
}

function setCookie(name, value, days) {
    let expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + "; expires=" + expirationDate.toUTCString() + "; path=/";
}