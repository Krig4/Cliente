<?php
require_once __DIR__ . "/connect.php";

if(isset($_POST['nif']) && isset($_POST['clave'])){
    $nif = $_POST['nif'];
    $codigo = $_POST['clave'];
    $sql = "SELECT nombreapellidos, annonacimiento FROM usuarioscj24 WHERE nif = :nif AND codigoacceso = :codigo";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nif', $nif);
    $stmt->bindParam(':codigo', $codigo);
    $stmt->execute();
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($resultado){
        $nombre = $resultado['nombreapellidos'];
        $fecha_nacimiento = $resultado['annonacimiento'];
        echo "<p>Gracias joven $nombre, nacido en $fecha_nacimiento por su colaboración, ha entrado en el sorteo de un viaje a Japón para conocer sus costumbres</p>";
        echo "<p>Premio</p>";
        echo "<img src='../img/JAPON.jpg' alt='Billete de Avión'>";
    } else {
        echo "<p>Error, el código acceso introducido es incorrecto</p>";
    }
    
    $stmt->closeCursor();
} else {
    echo "<p>Error: Todos los campos son obligatorios.</p>";
}
?>
