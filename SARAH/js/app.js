const URL='https://sarahalonsogrande.github.io/movies-250.json';

let peliculas;

/* <div class="container">
<!-- <article class="card">
    <figure>
        <img src="https://via.placeholder.com/300" class="poster" alt="Imagen de ejemplo">
        <figcaption>Imagen 1</figcaption>
    </figure>
    <div class="card-content">
        <h2>Título 1</h2>
        <p>Esta es la descripción de la tarjeta 1. Es breve y concisa.</p>
    </div>
</article> -->
</div> */

function generateCard(pelicula){
    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class","card");
    
    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);
    
    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class","card-content");
    nuevaCard.appendChild(nuevoContenido);
    
    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);
    
    //5. Crear el director <p><strong>Director:</strong> Francis Ford Coppola</p>
    const nuevoParrafoDirector = document.createElement("p");
    const nuevaNegrita = document.createElement("strong");
    nuevoParrafoDirector.appendChild(nuevaNegrita);
    nuevaNegrita.textContent = "Director: ";
    nuevoContenido.appendChild(nuevoParrafoDirector);
    const textoDirector = document.createTextNode(pelicula.Director)
    nuevoParrafoDirector.appendChild(textoDirector);
    
    //6. Año
    //<p><strong>Año:</strong> 1972</p>
    const nuevoParrafoAnyo = document.createElement("p");
    const nuevaNegritaAnyo = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaNegritaAnyo);
    nuevaNegritaAnyo.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year)
    nuevoParrafoAnyo.appendChild(textoAnyo);
    
    //7. Género
    //<p><span class="genre">Género:</span> Drama, Crimen</p>
    const nuevoParrafoGenero = document.createElement("p");
    const nuevoSpanGenero = document.createElement("span");
    nuevoSpanGenero.setAttribute("class","genre");
    nuevoSpanGenero.textContent = "Género: ";
    nuevoParrafoGenero.appendChild(nuevoSpanGenero);
    nuevoParrafoGenero.appendChild(document.createTextNode(pelicula.Genre));
    nuevoContenido.appendChild(nuevoParrafoGenero);

    //8. Actores
    //<p><span class="genre">Actores:</span> Rulo Pardo, Santiago Molero </p>
    const nuevoParrafoActores = document.createElement("p");
    const nuevoSpanActores = document.createElement("span");
    nuevoSpanActores.setAttribute("class","actors");
    nuevoSpanActores.textContent = "Actores: ";
    nuevoParrafoActores.appendChild(nuevoSpanActores);
    nuevoParrafoActores.appendChild(document.createTextNode(pelicula.Actors));
    nuevoContenido.appendChild(nuevoParrafoActores);

    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function processMovie(data) {
    peliculas = data.movies;
    //FORMAS DE RECORRER ARRAYS Y OBJETOS
    /*
    //Recorremos con bucle for tradicional
    for (let i=0;i<peliculas.length;i++){
        console.log("Duration:" + peliculas[i].Runtime);
    }
    //Recorremos con bucle for-of
    for (pelicula of peliculas) {
        console.log("Director:" + pelicula.Director);
    }
    //Recorremos con el método forEach
    peliculas.forEach(pelicula => {
        console.log("Título:" + pelicula.Title);
    });
    //Recorre el contenido de un objeto
    for (atributo in peliculas[0]){
        console.log(atributo, peliculas[0][atributo]);
    }
    */
    peliculas.forEach(pelicula => {
        generateCard(pelicula);
    });
}

function clearCards(){
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card=>card.remove());//Elegante
}

doGetRequest(URL, processMovie);