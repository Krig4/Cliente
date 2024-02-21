function consulta() {
    var nif = document.getElementById('nif').value;
    var clave = document.getElementById('clave').value;
  
    $.ajax({
      type: "POST",
      url: "../bbdd/consulta.php",
      data: { nif: nif, clave: clave },
      success: function (response) {
        $('#resultado').html(response);
      }
    });
  }
  function password() {
    var nif2 = document.getElementById('nif2').value;
  
    $.ajax({
      type: "POST",
      url: "../bbdd/password.php",
      data: { nif: nif2},
      success: function (response) {
        $('#resultado').html(response);
      }
    });
  }
function alta(){
    var nif = document.getElementById('nif3').value;
    var name = document.getElementById('rName').value;
    var year = document.getElementById('year').value;
    var password = document.getElementById('clave2').value;
    var parametros = {
        "nif3" : nif,
        "rName": name,
        "year": year,
        "clave2": password
    };
    $.ajax({
            data:  parametros,
            url:   "../bbdd/alta.php", 
            type:  'post',
            success:  function (response) {
                $('#resultado').html(response);
            }
    });
}