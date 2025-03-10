let votos = [];

document.getElementById('votingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const correo = document.getElementById('correo').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    // Validación simple 
    if (!nombre || !cedula || !correo || !anioNacimiento) {
        alert('Por favor complete todos los campos.');
        return;
    }

    // Almacenamos el voto en memoria (array)
    const voto = {
        nombre: nombre,
        cedula: cedula,
        correo: correo,
        anioNacimiento: anioNacimiento
    };
    votos.push(voto);

    // Mostrar mensaje de éxito
    document.getElementById('resultado').textContent = 'Voto registrado con éxito!';

    // Limpiar el formulario
    document.getElementById('votingForm').reset();
});

document.getElementById('verVotos').addEventListener('click', function () {
    const reporte = document.getElementById('reporteVotos');
    reporte.style.display = 'block';

    // Mostrar los votos almacenados
    if (votos.length === 0) {
        reporte.innerHTML = 'No hay votos registrados.';
    } else {
        let votosHtml = '<h3>Reporte de Votos:</h3><ul>';
        votos.forEach((voto, index) => {
            votosHtml += `<li>Voto #${index + 1}: ${voto.nombre}, Cédula: ${voto.cedula}, Correo: ${voto.correo}, Año de Nacimiento: ${voto.anioNacimiento}</li>`;
        });
        votosHtml += '</ul>';
        reporte.innerHTML = votosHtml;
    }
});
