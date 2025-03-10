const versiones = {
    navara: [
        { nombre: "Con Piscina", precio: 25000, imagen: "Imagenes/casa1.jpg" },
        { nombre: "Sin Piscina", precio: 30000, imagen: "Imagenes/Casa2.jpg" }
    ],
    sentra: [
        { nombre: "Playa", precio: 22000, imagen: "Imagenes/casaplaya1.jpg" },
        { nombre: "Montaña", precio: 27000, imagen: "Imagenes/casamontana1.jpg" }
    ]
};

function cargarVersiones() {
    let modelo = document.getElementById("modelo").value;
    let versionSelect = document.getElementById("version");
    versionSelect.innerHTML = '<option value="">-- Seleccionar Versión --</option>';
    
    if (modelo && versiones[modelo]) {
        versiones[modelo].forEach(version => {
            let option = document.createElement("option");
            option.value = version.nombre;
            option.textContent = version.nombre;
            versionSelect.appendChild(option);
        });
    }
}

function calcularCuota() {
    let modelo = document.getElementById("modelo").value;
    let versionSeleccionada = document.getElementById("version").value;
    let cuotaElemento = document.getElementById("cuota");
    let imagenElemento = document.getElementById("home-image");
    
    if (modelo && versionSeleccionada) {
        let version = versiones[modelo].find(v => v.nombre === versionSeleccionada);
        if (version) {
            let cuota = (version.precio / 60).toFixed(2);
            cuotaElemento.textContent = `Cuota aproximada: $${cuota} mensuales`;
            imagenElemento.src = version.imagen;
            imagenElemento.style.display = "block";
        }
    } else {
        cuotaElemento.textContent = "Por favor seleccione un modelo y una versión.";
        imagenElemento.style.display = "none";
    }
}