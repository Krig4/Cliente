<?php
    require_once __DIR__ . "./connect.php";
    try {
        $query = "SELECT * FROM base";
        $result = $conn->query($query);
    
        foreach ($result as $row) {
            echo json_encode($row);
        }
    
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    
    $conn = null;