// Datos de empleados con sus cédulas
const empleados = [
    { cedula: '109110338', nombre: 'Juan', apellidos: 'Pérez González', foto: 'Imagenes/persona1.jpg', lugar: 'San Jose' },
    { cedula: '209110338', nombre: 'María', apellidos: 'López Martínez', foto: 'Imagenes/persona3.avif', lugar: 'Cartago' },
    { cedula: '309110338', nombre: 'Carlos', apellidos: 'Sánchez Ruiz', foto: 'Imagenes/persona2.jpg', lugar: 'Heredia' },
    { cedula: '409110338', nombre: 'Ana', apellidos: 'Gómez Fernández', foto: 'Imagenes/persona4.avif', lugar: 'Alajuela' },
    { cedula: '509110338', nombre: 'Pedro', apellidos: 'Díaz Rodríguez', foto: 'Imagenes/persona5.jpg', lugar: 'Puntarenas' }
];

document.getElementById('buscar').addEventListener('click', function () {
    const cedula = document.getElementById('cedula').value.trim();
    
   
    if (!cedula) {
        alert('Por favor, ingrese un número de cédula.');
        return;
    }

    
    const empleado = empleados.find(emp => emp.cedula === cedula);

    
    const resultadoDiv = document.getElementById('resultado');

    if (empleado) {
        
        resultadoDiv.innerHTML = `
            <h3>Resultado de la búsqueda:</h3>
            <p><strong>Nombre:</strong> ${empleado.nombre} ${empleado.apellidos}</p>
            <p><strong>Lugar:</strong> ${empleado.lugar}</p>
            <img src="${empleado.foto}" alt="Foto del empleado" />
        `;
    } else {
        
        resultadoDiv.innerHTML = `
            <p id="usuarioNoExiste">El usuario NO existe.</p>
        `;
    }
});
