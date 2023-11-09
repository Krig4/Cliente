class Cinema{
    constructor(address, contact, taq, email, parking, minus, sound, film){
        this.address = address;
        this.contact = contact;
        this.taq = taq;
        this.email = email;
        this.parking = parking;
        this.minus = minus;
        this.sound = sound;
        this.film = film;
    }
saca_info_cine(){
    document.write("<nav class='infoCine'>");
    document.write("<ul class='listInfo'>");
    document.write("<li>"+this.address+"</li>");
    document.write("<li>"+this.contact+"</li>");
    document.write("<li>"+this.taq+"</li>");
    document.write("<li>"+this.email+"</li>");
    document.write("<li>"+this.parking+"</li>");
    document.write("<li>"+this.minus+"</li>");
    document.write("<li>"+this.sound+"</li>");
    document.write("</ul>");
    document.write("</nav>");
}
}
let cine = new Cinema("Calle Falsa 123","56473873","Taquilla", "cine@cine.com","No Parking","5 Minusvalidos","Dolby 3D")