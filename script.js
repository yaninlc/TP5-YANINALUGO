// Al hacer submit, evitar que se recargue la página
document.getElementById("forms").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

    // Crear un bloque de resultados
    const resultado = `
        <div class="resultado-item">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
        </div>
    `;

    // Añadir el resultado al contenedor de resultados (acumulando las respuestas)
    document.getElementById("resultado").innerHTML += resultado;

    // Limpiar los campos del formulario después de enviar los datos
    document.getElementById("forms").reset();
});

// Limpiar todo el resultado al hacer clic en el botón "Limpiar"
document.getElementById("resetear").addEventListener("click", function () {
    document.getElementById("forms").reset();
    document.getElementById("resultado").innerHTML = ""; // Limpiar el área de resultados
});
