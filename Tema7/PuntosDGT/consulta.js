function consultarSaldo() {
    const nif = document.getElementById('nif').value;
    const clave = document.getElementById('clave').value;

    // Validar NIF/NIE y clave (puedes implementar funciones de validación)

    // Realizar la petición AJAX al servidor
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const respuesta = JSON.parse(xhr.responseText);
            mostrarResultado(respuesta);
        }
    };

    xhr.open("POST", "consulta.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`nif=${nif}&clave=${clave}`);
}

function mostrarResultado(respuesta) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Saldo de puntos: ${respuesta.puntos}<br>
                             Nombre: ${respuesta.nombre}<br>
                             Apellidos: ${respuesta.apellidos}`;
}
function getData() {
    $.getJSON("http://localhost/Cliente/Tema7/PuntosDGT/dbToJson.php", function (result){
        $.each(result, function(i, field){
            console.log(i + ": " + field);
          });
        });
}