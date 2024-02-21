<?php
// Aquí procesarás la petición del lado del servidor
// y devolverás la información del saldo de puntos del conductor.
// También puedes conectarte a una base de datos para obtener más información.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nif = $_POST['nif'];
    $clave = $_POST['clave'];

    // Validar el NIF/NIE y la clave (puedes implementar funciones de validación)

    // Conectar a la base de datos (reemplaza 'nombre_usuario', 'contraseña', 'nombre_base_de_datos' con tus propios valores)
    $conn = new mysqli('localhost', 'nombre_usuario', 'contraseña', 'nombre_base_de_datos');

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }

    // Consulta SQL corregida
    $query = "SELECT puntos, nombre, apellidos FROM base WHERE nif = '$nif'";
    $resultado = $conn->query($query);

    if ($resultado) {
        // Obtener el resultado de la consulta
        $row = $resultado->fetch_assoc();

        // Almacenar los resultados en variables
        $saldoPuntos = $row['puntos'];
        $nombre = $row['nombre'];
        $apellidos = $row['apellidos'];

        // Crear el array de respuesta
        $respuesta = array(
            'puntos' => $saldoPuntos,
            'nombre' => $nombre,
            'apellidos' => $apellidos
        );

        // Devolver la respuesta en formato JSON
        echo json_encode($respuesta);
    } else {
        // Manejar errores en la consulta
        echo "Error en la consulta: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
} else {
    // Manejar otro tipo de solicitudes o devolver un error
    http_response_code(405);
    echo "Método no permitido";
}
?>
