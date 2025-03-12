function mostrarDescripcion(region) {
    // Ocultar todas las descripciones
    var regiones = ['america', 'europa', 'africa', 'asia', 'oceania'];
    for (var i = 0; i < regiones.length; i++) {
        document.getElementById('descripcion-' + regiones[i]).style.display = 'none';
    }

    // Mostrar la descripción de la región seleccionada
    document.getElementById('descripcion-' + region).style.display = 'block';
}