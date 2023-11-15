class Robot {
    Mespera;
    Mactivar;
    Mayuda;
    constructor(nombre, tipo, estado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
espera() {
    document.write(this.nombre + "¡Iniciando modo espera! … ¡En modo espera!");
    this.estado = 0;
}
activar() {
    document.write(this.nombre + "¡Saliendo modo espera … Activado!");
    this.estado = 1;
}
ayuda(){
    if (this.estado = 0) {
        document.write("Piiip")
    }if (this.estado = 1){
        document.write("¡Vengo inmediatamente!")
    }
}
}

C3PO = new Robot('C3PO', 'traductor', 0);
R2D2 = new Robot('R2D2', 'arregla-todo', 0);