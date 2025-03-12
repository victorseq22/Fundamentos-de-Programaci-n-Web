function irAlCine() {
    let select = document.getElementById("cineSelect");
    let url = select.value;
    if (url) {
        window.open(url, "_blank"); // Redirige a la URL seleccionada
    }
}