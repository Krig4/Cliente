<?php
require_once __DIR__ . "/connect.php";
if (isset($_POST["nif3"]))
    $nif = $_POST["nif3"];
if (isset($_POST["rName"]))
    $name = $_POST["rName"];
if (isset($_POST["year"]))
    $year = $_POST["year"];
if (isset($_POST["clave2"]))
    $clave = $_POST["clave2"];
try {
    $query = "INSERT INTO `usuarioscj24` (`nif`, `codigoacceso`, `nombreapellidos`, `annonacimiento`)
    VALUES ('$nif', '$clave', '$name', '$year')";
    $conn->query($query);
    echo "<p>Usuario creado con éxito</p>";
} catch (PDOException $e) {
    echo $e;
}
