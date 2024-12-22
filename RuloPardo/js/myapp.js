/*****************************************************/

function doGetRequest(url, processData) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
}

/**************************************************/

const URL='https://sarahalonsogrande.github.io/RuloPardo/omdbRulo.json';

let peliculas;
let peliculasFiltradas;

function generateCard(pelicula){
    //0. Cambiamos el contador
    document.querySelector("#contador").textContent=peliculasFiltradas.length;

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

    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function generarDesplegableGenero(peliculas){
    //Extraemos los géneros del fichero json 
    let setGeneros = new Set();
    peliculas.forEach(pelicula=>{
        let generos = pelicula.Genre.split(',').map(genero=>genero.trim());
        generos.forEach(genero=>setGeneros.add(genero));
    });
    //<option value="drama">Drama</option>
    let arrayGeneros = Array.from(setGeneros);
    arrayGeneros.sort().forEach(genero=>{
        let generoOption = document.createElement("option");
        generoOption.setAttribute("value",genero.toLowerCase());
        generoOption.textContent=genero;
        document.querySelector("#s-genero").appendChild(generoOption);
    });
}

function processMovie(data) {
    peliculas = data.movies;
    //peliculasFiltradas = peliculas;//Ambos arrays son el mismo
    peliculasFiltradas = Array.from(peliculas);//Crea un nuevo array
    generarDesplegableGenero(peliculas);

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

/*********************************************************************/

//Busqueda por Título, pulsando el botón Buscar
document.querySelector("#b-titulo").addEventListener("click", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Busqueda por Título, escribiendo en la caja de texto
/*
document.querySelector("#t-titulo").addEventListener("input", () => {
    filtrarPeliculas("#t-titulo","Title");
});
*/

//Busqueda por Actor, pulsando el botón Buscar
document.querySelector("#b-actor").addEventListener("click", () => {
    filtrarPeliculas("#t-actor", "Actors");
});

//Busqueda por Género, pulsando el botón Buscar
/*
document.querySelector("#b-genero").addEventListener("click", () => {
    filtrarPeliculas("#s-genero","Genre");
});
*/

//Busqueda por Género, cambiando la selección del desplegable
document.querySelector("#s-genero").addEventListener("change", () => {
    filtrarPeliculas("#s-genero", "Genre");
});

//Busqueda por Año, pulsando el botón Buscar
document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

/**
 * Función de búsqeuda 
 * 
 * @param {*} idElementoBusqueda Nombre del elemento en el que está el texto de búsqueda
 * @param {*} nombreAtributoBusqueda Nombre del atributo del JSON sobre el que hay que buscar
 */
function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
    clearCards();
    const textoBusqueda = document.querySelector(idElementoBusqueda).value;
    peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula[nombreAtributoBusqueda]
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);
}

/*********************************************************************/

//Diferentes maneras de asignar funciones a eventos
/*
document.querySelector("#b-ordenar").addEventListener("mouseleave", (event)=> {
    console.log("Leave");
});

document.querySelector("#b-ordenar").onclick = function(event) {
    console.log("Pulsado");
};

document.querySelector("#b-ordenar").onmouseover = (event)=> console.log("Over");

function doAction(){
    console.log("Focus in");
}

document.querySelector("#b-ordenar").addEventListener("focusin", doAction);
*/

document.querySelector("#b-ordenar").onclick = (event)=>{
    clearCards();
    const asc = document.querySelector("#r-asc").checked;
    const desc = document.querySelector("#r-desc").checked;
    //Ordenar en función del valor de Runtime
    peliculasFiltradas.sort((p1, p2)=> {
        if (asc===true) {
            return parseInt(p1.Runtime) - parseInt(p2.Runtime);
        } else if (desc===true) {
            return parseInt(p2.Runtime) - parseInt(p1.Runtime);
        }
    });
    peliculasFiltradas.map(generateCard);
};
