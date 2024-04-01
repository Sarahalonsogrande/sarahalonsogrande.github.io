document.addEventListener("DOMContentLoaded", function () {

    const fichaTecnica = [
        {
            id: "polar",
            titulo: "polar",
            sipnosis: "La tierra dominada por los humanos nunca está preparada para escuchar la voz de la naturaleza cuando ruge, bien sea en forma de tsunamis arrasando poblaciones, deshielo, inundaciones, terremotos, incendios, nunca estamos preparados.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "comedia",
            titulo: "la comedia de los errores",
            sipnosis: "La obra comienza con una sentencia de muerte y todo se convierte en una fiesta por error. De los errores aprendemos, pero es un error pensarlo si aspiramos a no equivocarnos.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "vigor",
            titulo: "vigor mortis",
            sipnosis: "La obra se construye al abrigo del carácter insólito o milagroso de lo ordinario. Se muestra en el detalle de los gestos, en la melancolía silenciosa de las miradas, en la afectiva incertidumbre  lo cotidiano.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "naufragios",
            titulo: "naufragios",
            sipnosis: "Narra la desastrosa expedición a La Florida en 1527 bajo el mando de Pánfilo de Narváez y el cúmulo de         infortunios de Álvar y los otros tres supervivientes a lo largo de unos 18.000 km de tierras inhóspitas.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "hombredormido",
            titulo: "todas las noches...",
            sipnosis: "Jaime despierta en un lugar que no reconoce. Otro hombre que empieza a hacerle preguntas, pronto nos damos cuenta de que estamos ante un interrogatorio. Alguien ha muerto, lo que ocurre es que su memoria no consigue elaborar un relato",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "mipelicula",
            titulo: "mi película italiana",
            sipnosis: "La historia de siete mujeres de una misma familia que habla de la única herencia que reciben: la gestión de la soledad. Cecchi D'Amico nunca escribió un papel protagonista para Anna. Por eso lo he hecho yo, su nieta. Ésta es su película italiana.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "precioso",
            titulo: "precioso",
            sipnosis: "Un cuento a veces triste y a veces esperanzador donde la comedia, la tragedia, la ciencia ficción, el kárate, los sueños, el amor y el baile formarán una metáfora PRECIOSA. En definitiva, una declaración de amor incondicional a nuestro Planeta.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "mueblofilia",
            titulo: "mueblofilia",
            sipnosis: "Un musical punk con once actores/músicos en escena. Una comedia apabullante en la que el teatro y el concierto se mezclan y se funden. Un canto a la defensa de la rareza, al orgullo de lo distinto. Un musical único en su especie.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "danzad",
            titulo: "danzad malditos",
            sipnosis: "Basado en la película de Sydney Pollack sobre maratones de resistencia, auténticos espectáculos de la miseria. La competición se desarrolla de manera real: cada función es un folio en blanco que se irá escribiendo con cada movimiento de sus participantes.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "famelica",
            titulo: "famelica",
            sipnosis: "Juan Mayorga en permanente diálogo con el director Jorge Sánchez han ido dando forma a esta comedia de ideas acerca de lo que temes y deseas y ocultas cada mañana cuando ves ante ti las puertas del edificio corporativo.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "canicula",
            titulo: "canicula",
            sipnosis: "Habla, en tono de humor, de la identidad española, una forma de ser construida a través de muchos años de tiranía, sobre la base del sacrificio, y sobre la figura del chivo expiatorio. ",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "macbez",
            titulo: "los macbez",
            sipnosis: "Lleva al público, a los lugares más oscuros del corazón, donde anida el deseo... para bien y para mal. Un escenario de sangre y tormenta se enmarca en un lienzo blanco. Nuestro destino lo marcamos nosotros, lo demás son cuentos de brujas.",
            genero: "teatro",
            enlace: ""
        },
        {
            id: "capitalismo",
            titulo: "capitalismo, hazles reir",
            sipnosis: "Retrato absurdo de este mundo absurdo que nos toca vivir, marcado por un sistema de vida, el capitalismo, que nos marca en lo político, en la manera de organizarnos, y en lo personal en cómo lo vivimos.",
            genero: "teatro",
            enlace: ""
        },
    ];

    fichaTecnica.forEach((item) => {
        const rutaImagen = `img/teatro/${item.id}.jpg`; // Construir la ruta de la imagen dinámicamente
        item.img = rutaImagen; // Asignar la ruta de la imagen al objeto
        item.enlace = `${item.id}.html`; // Construir el enlace dinámicamente
    });

    let fragmento = document.createDocumentFragment(); // Usamos un fragmento de documento

    fichaTecnica.forEach((x) => {
        let article = document.createElement('article');
        article.innerHTML = `
            <figure>
                <img src="${x.img}" alt="${x.titulo}">
                <figcaption><h3>${x.titulo}</h3></figcaption>
            </figure>
            <p>${x.sipnosis}</p>
            <a href="${x.enlace}">Ver más</a>
        `;
        fragmento.appendChild(article);
    });

    document.getElementById("plantillaFichas").appendChild(fragmento);
});