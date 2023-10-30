function calcularDigitosControl() {
    // Obtenemos los datos de los campos del formulario
    const entidad = document.getElementById("entidad").value;
    const oficina = document.getElementById("oficina").value;
    const numeroCuenta = document.getElementById("numeroCuenta").value;
  
    // Calculamos el primer dígito de control
    const primerDigitoControl = calcularPrimerDigitoControl(entidad, oficina, numeroCuenta);
  
    // Calculamos el segundo dígito de control
    const segundoDigitoControl = calcularSegundoDigitoControl(primerDigitoControl, numeroCuenta);
  
    // Mostramos los resultados
    document.getElementById("resultado").innerHTML = `
      <p>Primer dígito de control: ${primerDigitoControl}</p>
      <p>Segundo dígito de control: ${segundoDigitoControl}</p>
    `;
  }
  
  // Función para calcular el primer dígito de control
  function calcularPrimerDigitoControl(entidad, oficina, numeroCuenta) {
    // Convertimos los datos a números enteros
    entidad = parseInt(entidad);
    oficina = parseInt(oficina);
    numeroCuenta = parseInt(numeroCuenta);
  
    // Calculamos el primer dígito de control
    const primerDigito = (entidad * 4 + oficina * 8 + numeroCuenta[0] + numeroCuenta[2] + numeroCuenta[4] + numeroCuenta[6]) % 11;
  
    // Devolvemos el dígito de control
    return (primerDigito < 10) ? primerDigito : 11 - primerDigito;
  }
  
  // Función para calcular el segundo dígito de control
  function calcularSegundoDigitoControl(primerDigitoControl, numeroCuenta) {
    // Convertimos el primer dígito de control a número entero
    primerDigitoControl = parseInt(primerDigitoControl);
  
    // Calculamos el segundo dígito de control
    const segundoDigito = (primerDigitoControl * 9 + numeroCuenta[1] + numeroCuenta[3] + numeroCuenta[5] + numeroCuenta[7]) % 11;
  
    // Devolvemos el dígito de control
    return (segundoDigito < 10) ? segundoDigito : (primerDigitoControl === 0 ? 0 : 11 - segundoDigito);
  }
  
  