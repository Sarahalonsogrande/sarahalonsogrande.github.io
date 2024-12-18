// Búsqueda por  TÍTULO
document.querySelector("#b-titulo").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

// Búsqueda por ACTOR
document.querySelector("#b-actor").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-actor").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Actors
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    // peliculasFiltradas.forEach(pelicula => {
    //     generateCard(pelicula);
    // });
    peliculasFiltradas.map(generateCard); // Map es una solución alternativa
});

// Búsqueda por AÑO
document.querySelector("#b-anyo").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-anyo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Year
                .includes(textoBusqueda));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

// Búsqueda por GÉNERO
document.querySelector("#b-genero").addEventListener("click", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#s-genero").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Genre
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});

/*
//Se busca por cada pulsación
document.querySelector("#t-titulo").addEventListener("input", () => {
    clearCards();
    const textoBusqueda = document.querySelector("#t-titulo").value;
    const peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula.Title
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.forEach(pelicula => {
        generateCard(pelicula);
    });
});
*/


// const personas = [
//     { name: 'Sarah', age: 50 },
//     { name: 'César', age: 52 },
//     { name: 'Anne', age: 10 },
//     { name: 'Sienna', age: 5 }
// ]

// personas.some((persona) => {
//     return persona.age > 18
// })