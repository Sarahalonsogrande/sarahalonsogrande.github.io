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