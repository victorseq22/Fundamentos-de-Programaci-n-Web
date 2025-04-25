const versiones = {
    desayuno: [
        { nombre: "Bebida natural", precio: 2500, imagen: "imagenes/desayuno.jpg" },
        { nombre: "Bebida alcohólica", precio: 3000, imagen: "imagenes/desayuno.jpg" }
    ],
    almuerzo: [
        { nombre: "Bebida natural", precio: 3000, imagen: "imagenes/almuerzo.jpg" },
        { nombre: "Bebida alcohólica", precio: 3500, imagen: "imagenes/almuerzo.jpg" }
    ],
    cena: [
        { nombre: "Bebida natural", precio: 3000, imagen: "imagenes/cena.jpg" },
        { nombre: "Bebida alcohólica", precio: 3500, imagen: "imagenes/cena.jpg" }
    ],
    postre: [
        { nombre: "Bebida natural", precio: 2000, imagen: "imagenes/postres.jpg" },
        { nombre: "Bebida alcohólica", precio: 2300, imagen: "imagenes/postres.jpg" }
    ]
    
};

function cargarVersiones() {
    let modelo = document.getElementById("platillo").value;
    let versionSelect = document.getElementById("bebida");
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
    let modelo = document.getElementById("platillo").value;
    let versionSeleccionada = document.getElementById("bebida").value;
    let cuotaElemento = document.getElementById("cuota");
    let imagenElemento = document.getElementById("home-image");
    
    if (modelo && versionSeleccionada) {
        let version = versiones[modelo].find(v => v.nombre === versionSeleccionada);
        if (version) {
            let cuota = (version.precio / 1).toFixed(2);
            cuotaElemento.textContent = `Monto Aproximado: ₡${cuota} `;
            imagenElemento.src = version.imagen;
            imagenElemento.style.display = "block";
        }
    } else {
        cuotaElemento.textContent = "Por favor seleccione un platillo y una bebida.";
        imagenElemento.style.display = "none";
    }
}

