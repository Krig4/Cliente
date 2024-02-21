<?php
require 'connection.php';

$nif = $_POST['nif'];
$clave = $_POST['clave'];

$query = "SELECT nif, nombre, apellido1, apellido2, proyectos FROM personal INNER JOIN academico ON personal.id_usuario = academico.id_usuario WHERE nif = :nif AND clave = :clave";
$stmt = $conn->prepare($query);
$stmt->bindParam(':nif', $nif);
$stmt->bindParam(':clave', $clave);
$stmt->execute();

$resultado = $stmt->fetch(PDO::FETCH_ASSOC);
//var_dump($resultado);

if ($resultado) {
    echo '<html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Información del Investigador</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        margin: 50px;
                    }

                    .container {
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        max-width: 600px;
                        margin: 0 auto;
                    }

                    h2 {
                        color: #333;
                    }

                    .info {
                        margin-top: 20px;
                        text-align: left;
                    }

                    .info label {
                        font-weight: bold;
                    }

                    .info span {
                        display: block;
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>Información del Investigador</h2>
                    <div class="info">
                        <label>NIE/NIF:</label>
                        <span>' . $resultado['nif'] . '</span>

                        <label>Proyectos:</label>
                        <span>' . $resultado['proyectos'] . '</span>

                        <label>Nombre del Investigador:</label>
                        <span>' . $resultado['nombre'] . " " . $resultado['apellido1'] . " " . $resultado['apellido2'] . '</span>
                    </div>
                </div>
            </body>
        </html>';
} else {
    echo 'Usuario no encontrado o clave incorrecta';
}
?>
