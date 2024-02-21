<?php
require_once __DIR__ . "/connect.php";

if(isset($_POST['nif'])){
    $nif = $_POST['nif'];
    $sql = "SELECT codigoacceso FROM usuarioscj24 WHERE nif = :nif";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nif', $nif);
    $stmt->execute();
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if($resultado){
        $clave = $resultado['codigoacceso'];
        echo "<p>Su clave es: $clave</p>";
    } else {
        echo "<p>Error, el NIF introducido es incorrecto</p>";
    }
    
    $stmt->closeCursor();
} else {
    echo "<p>Error: Todos los campos son obligatorios.</p>";
}
?>
