function mostrarImagen() {
    var opcion = document.getElementById("opciones").value;
    var imagenContainer = document.getElementById("imagenContainer");
    imagenContainer.innerHTML = ""; // Limpiar cualquier imagen anterior

    // Aquí vas a cambiar las rutas de las imágenes a las que tienes en tu carpeta 'images'
    if (opcion == "1") {
        var img = document.createElement("img");
        img.src = "Imagenes/desayuno 1.jpeg";  // Ruta de la imagen de la Opción 1
        img.alt = "Imagen Opción 1";
        imagenContainer.appendChild(img);
    } else if (opcion == "2") {
        var img = document.createElement("img");
        img.src = "Imagenes/almuerzo 2.jpg";  // Ruta de la imagen de la Opción 2
        img.alt = "Imagen Opción 2";
        imagenContainer.appendChild(img);
    } else if (opcion == "3") {
        var img = document.createElement("img");
        img.src = "Imagenes/cenas.jpg";  // Ruta de la imagen de la Opción 3
        img.alt = "Imagen Opción 3";
        imagenContainer.appendChild(img);
    }
}

