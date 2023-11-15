class Cinema {
    constructor(address, contact, taq, email, parking, minus, sound, film) {
        this.address = address;
        this.contact = contact;
        this.taq = taq;
        this.email = email;
        this.parking = parking;
        this.minus = minus;
        this.sound = sound;
        this.film = film;
    }

    saca_info_cine() {
        document.write("<nav class='infoCine'>");
        document.write("<ul class='listInfo'>");
        document.write("<li>" + this.address + "</li>");
        document.write("<li>" + this.contact + "</li>");
        document.write("<li>" + this.taq + "</li>");
        document.write("<li>" + this.email + "</li>");
        document.write("<li>" + this.parking + "</li>");
        document.write("<li>" + this.minus + "</li>");
        document.write("<li>" + this.sound + "</li>");
        document.write("</ul>");
        document.write("</nav>");
    }

    mostrar_peliculas() {
        for (let index = 0; index < this.film.length; index++) {
            document.write("<nav class='infoCine'>");
            document.write("<ul class='listInfo'>");
            document.write("<li><span onclick='cine.infotitulo(" + index + ")'>" + this.film[index]["titulo"] + "</span></li>");
        document.write("<li><img src=" + this.film[index]["link_imagen"] + "></img></li>");
            document.write("<li>" + this.film[index]["genero"] + "</li>");
            document.write("<li>" + this.film[index]["nacionalidad"] + "</li>");
            document.write("<li>" + this.film[index]["clasificacion"] + "</li>");
            document.write("</ul>");
            document.write("</nav>");
        }
    }
    infotitulo(index) {
        const pelicula = this.film[index];
        const infoWindow = window.open("", "Información de la Película", "width=500,height=500");
        infoWindow.document.write("<h2>" + pelicula.titulo + "</h2>");
        infoWindow.document.write("<p><strong>Director:</strong> " + pelicula.director + "</p>");
        infoWindow.document.write("<p><strong>Nacionalidad:</strong> " + pelicula.nacionalidad + "</p>");
        infoWindow.document.write("<p><strong>Género:</strong> " + pelicula.genero + "</p>");
        infoWindow.document.write("<p><strong>Clasificación:</strong> " + pelicula.clasificacion + "</p>");
        infoWindow.document.write("<p><strong>Descripción:</strong> " + pelicula.descripcion + "</p>");
        infoWindow.document.write("<p><strong>Duración:</strong> " + pelicula.duracion + " minutos</p>");
        infoWindow.document.write("<p><strong>Actores:</strong> " + pelicula.actores + "</p>");
        infoWindow.document.write("<p><a href='" + pelicula.link_exterior + "' target='_blank'>Más información</a></p>");
        infoWindow.document.write("<img src='" + pelicula.link_imagen + "' alt='" + pelicula.titulo + "' />");
    }
}

// Definimos los datos de las películas
const peliculas = [
    {
        pid: "1",
        titulo: "Transformers",
        director: "Michael Bay",
        nacionalidad: "Americana",
        genero: "Accion/Ciencia Ficcion",
        clasificacion: "PG-13",
        descripcion: "A long time ago, far away on the planet of Cybertron…",
        duracion: "144",
        actores: "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson",
        link_exterior: "http://www.transformersmovie.com/intl/es/",
        link_imagen: "./transformers.jpg"
    },
    {
        pid: "2",
        titulo: "Joshua",
        director: "George Ratliff",
        nacionalidad: "Americana",
        genero: "Thriller",
        clasificacion: "No Apta",
        descripcion: "The arrival of a newborn girl causes the gradual disintegration of … ",
        duracion: "130",
        actores: "Sam Rockwell, Vera Farmiga, Celia Weston",
        link_exterior: "http://imdb.com/title/tt0808331/",
        link_imagen: "./joshua.jpg"
    }
];


let cine = new Cinema("Calle Falsa 123","56473873","Taquilla", "cine@cine.com","No Parking","5 Minusvalidos","Dolby 3D", peliculas);