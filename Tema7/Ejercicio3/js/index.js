function getData() {
  var nif = document.getElementById('nif').value;
  var clave = document.getElementById('clave').value;

  $.ajax({
    type: "POST",
    url: "bbdd/consulta.php",
    data: { nif: nif, clave: clave },
    success: function (response) {
      $('#resultado').html(response);
    }
  });
}

function getNewUser() {
  var form = document.getElementById("registrationForm");
  var formData = new FormData(form);

  if (!formData.get("name") || !formData.get("apellido1") || !formData.get("email")) {
      showMessage("Por favor, complete los campos obligatorios.");
      return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "tu_servidor.php", true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
          if (xhr.status == 200) {
              var response = JSON.parse(xhr.responseText);
              showMessage(response.message);
          } else {
              showMessage("Error en la solicitud al servidor.");
          }
      }
  };

  xhr.send(formData);
}

function showMessage(message) {
  var messageDiv = document.getElementById("message");
  messageDiv.innerHTML = message;
}