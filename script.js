// Código JavaScript para manejar el envío del formulario
document.getElementById("forms").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const pais = document.getElementById("pais").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked')).map(el => el.value);

    // Crear el contenido del resultado
    const resultado = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Intereses:</strong> ${intereses.join(", ") || "Ninguno"}</p>
    `;

    // Mostrar los resultados en la página
    document.getElementById("resultado").innerHTML = resultado;
});

// Código para el botón "Limpiar" que reinicia el formulario
document.getElementById("resetear").addEventListener("click", function () {
    document.getElementById("forms").reset();
    document.getElementById("resultado").innerHTML = ""; // Limpiar el área de resultados
});
