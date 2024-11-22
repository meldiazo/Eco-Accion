const proyectos = [
    {
        titulo: "Reforestación en Santa Cruz",
        descripcion: "Ayuda a reforestar áreas afectadas por incendios en la Amazonía boliviana.",
        imagen: "santa_cruz.jpg",
        enlace: "#"
    },
    {
        titulo: "Bosques Chiquitanos",
        descripcion: "Un proyecto para recuperar los bosques chiquitanos con la ayuda de voluntarios.",
        imagen: "bosques_chiquitanos.jpg",
        enlace: "#"
    },
    {
        titulo: "Reforestando Tarija",
        descripcion: "Contribuye a reforestar las áreas más afectadas por la deforestación en Tarija.",
        imagen: "tarija.jpg",
        enlace: "#"
    }
];

const container = document.querySelector('.proyectos-container');

proyectos.forEach(proyecto => {
    const card = document.createElement('div');
    card.classList.add('proyecto-card');

    card.innerHTML = `
        <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <a href="${proyecto.enlace}">Ver más</a>
    `;

    container.appendChild(card);
});
