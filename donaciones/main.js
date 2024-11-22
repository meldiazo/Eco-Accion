// Onload global para la animación de las flores
window.onload = () => {
    document.body.classList.remove("container");
};

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Define los montos máximos de cada proyecto
    const maxAmounts = {
        1: 5000,
        2: 10000,
        3: 7000,
    };

    // Define los montos actuales de cada proyecto
    const currentAmounts = {
        1: 3200,
        2: 7500,
        3: 2100,
    };

    // Añadir evento a cada botón de donación
    document.querySelectorAll('button[data-id]').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id'); // Obtiene el ID del proyecto
            const progressBar = document.querySelector(`#progress-bar-${id} span`);
            const progressText = document.querySelector(`#progress-text-${id}`);

            // Incrementar el monto actual
            const increment = 100; // Incremento por clic
            currentAmounts[id] = Math.min(currentAmounts[id] + increment, maxAmounts[id]); // Limita al máximo

            // Calcular porcentaje
            const percentage = (currentAmounts[id] / maxAmounts[id]) * 100;

            // Actualizar barra de progreso
            progressBar.style.width = `${percentage}%`;

            // Actualizar texto de progreso
            progressText.textContent = `Progreso: ${currentAmounts[id].toLocaleString()} / ${maxAmounts[id].toLocaleString()} USD`;

            // Deshabilitar botón si se alcanza el monto máximo
            if (currentAmounts[id] >= maxAmounts[id]) {
                event.target.disabled = true;
                event.target.textContent = 'Meta alcanzada';
            }
        });
    });

    // Configuración específica para iframes de las flores
    const flowerIframes = document.querySelectorAll(".flowers-frame");
    flowerIframes.forEach((iframe) => {
        iframe.onload = () => {
            iframe.contentDocument.body.classList.remove("container");
        };
    });
});
