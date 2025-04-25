// const producto = document.querySelector('#producto');
// const tipo = document.querySelector('#tipo');



// const resultado = document.querySelector('#resultado');

// const max = new Date().getFullYear();
// const min = max - 10;

// const datosBusqueda = {
//     producto: '',
//     tipo: '',

// };


// document.addEventListener('DOMContentLoaded', () => {

//     const busquedaGuardada = localStorage.getItem('busqueda');


//     llenarSelect();

//     if (busquedaGuardada) {
//         Object.assign(datosBusqueda, JSON.parse(busquedaGuardada));
//         filtrarAuto();
//         marca.value = datosBusqueda.marca;
//         year.value = datosBusqueda.year;
//     } else {
        
//         mostrarAutos(autos)
//     }
// });


// btnLimpiar.addEventListener('click', () => {

//     datosBusqueda.producto = '';
//     datosBusqueda.tipo = '';


//     localStorage.removeItem('busqueda');

//     producto.value = '';
//     tipo.value = '';


//     mostrarAutos(autos);
// });



// producto.addEventListener('change', e => {

//     datosBusqueda.producto = e.target.value;
//     filtrarAuto();
// });

// tipo.addEventListener('change', e => {

//     datosBusqueda.tipo = parseInt(e.target.value);
//     filtrarAuto();
// });




// function mostrarAutos(autos) {
//     limpiarHTML();
//     autos.forEach(auto => {
//         const { producto, tipo,img } = auto;
//         autoHTML = document.createElement('div');
//         autoHTML.classList.add('col')
//         autoHTML.innerHTML = `        
//             <div class="card mt-4" style="width: 18rem;">
//                 <div style="height: 260px;">
//                     <img class="card-img-top" src="${img}" alt="Card image cap">
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-text">${marca} ${modelo}</h4>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Año: ${year}</li>
//                     </ul>
//                 </div>
//             </div>`;
//         resultado.appendChild(autoHTML);
//     });
// }



// function noResultado() {
//     limpiarHTML();
//     const noResultado = document.createElement('div');
//     noResultado.classList.add('alerta');
//     noResultado.textContent = 'No hay ningun vehiculo con esas caracteristicas';
//     resultado.appendChild(noResultado);
// }


// function limpiarHTML() {
//     while (resultado.firstChild) {

//         resultado.removeChild(resultado.firstChild);
//     }
// };




// function llenarSelect() {

//     for (let i = max; i >= min; i--) {
//         const opcion = document.createElement('option');
//         opcion.value = i;
//         opcion.textContent = i;
//         tipo.appendChild(opcion);
//     }
// }


// function filtrarAuto() {
//     const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

//     resultado.length ? mostrarAutos(resultado) : noResultado();
// }


// function filtrarMarca(auto) {
//     const { producto } = datosBusqueda;
//     if (producto) {
//         guardarLocalStorage();
//         return auto.producto === producto;
//     }

//     return auto;
// }


// function filtrarYear(auto) {
//     const { tipo } = datosBusqueda;

//     if (tipo) {
//         guardarLocalStorage()
//         return auto.tipo === tipo;
//     }
//     return auto;
// }


// function guardarLocalStorage() {
//     localStorage.setItem('busqueda', JSON.stringify(datosBusqueda));
// }

const producto = document.querySelector('#producto');
const tipo = document.querySelector('#tipo');
const resultado = document.querySelector('#resultado');
const btnLimpiar = document.querySelector('#btnLimpiar');

const datosBusqueda = {
    producto: '',
    tipo: ''
};

const tiposPorProducto = {
    Carne: ["Res", "Pollo", "Cerdo"],
    Lácteos: ["Leche", "Queso", "Yogur"],
    Hortalizas: ["Zanahoria", "Lechuga", "Papa"]
};

document.addEventListener('DOMContentLoaded', () => {
    const busquedaGuardada = localStorage.getItem('busqueda');

    if (busquedaGuardada) {
        Object.assign(datosBusqueda, JSON.parse(busquedaGuardada));
        producto.value = datosBusqueda.producto;
        cargarTipos(datosBusqueda.producto, () => {
            tipo.value = datosBusqueda.tipo;
            filtrarAuto();
        });
    } else {
        mostrarAutos(autos);
    }
});

producto.addEventListener('change', e => {
    datosBusqueda.producto = e.target.value;
    datosBusqueda.tipo = '';
    cargarTipos(e.target.value);
    filtrarAuto();
});

tipo.addEventListener('change', e => {
    datosBusqueda.tipo = e.target.value;
    filtrarAuto();
});

btnLimpiar.addEventListener('click', () => {
    datosBusqueda.producto = '';
    datosBusqueda.tipo = '';
    localStorage.removeItem('busqueda');
    producto.value = '';
    tipo.innerHTML = '<option value="">Seleccione</option>';
    mostrarAutos(autos);
});

function cargarTipos(productoSeleccionado, callback = () => {}) {
    tipo.innerHTML = '<option value="">Seleccione</option>';

    if (tiposPorProducto[productoSeleccionado]) {
        tiposPorProducto[productoSeleccionado].forEach(t => {
            const opcion = document.createElement('option');
            opcion.value = t;
            opcion.textContent = t;
            tipo.appendChild(opcion);
        });
    }

    callback();
}

function filtrarAuto() {
    guardarLocalStorage();
    const resultadoFiltrado = autos
        .filter(auto => !datosBusqueda.producto || auto.producto === datosBusqueda.producto)
        .filter(auto => !datosBusqueda.tipo || auto.tipo === datosBusqueda.tipo);

    resultadoFiltrado.length ? mostrarAutos(resultadoFiltrado) : noResultado();
}

function mostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(auto => {
        const { producto, tipo, img } = auto;
        const autoHTML = document.createElement('div');
        autoHTML.classList.add('col-md-4', 'mb-4');
        autoHTML.innerHTML = `
            <div class="card">
                <img src="${img}" class="card-img-top" alt="${tipo}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${producto}</h5>
                    <p class="card-text">${tipo}</p>
                </div>
            </div>`;
        resultado.appendChild(autoHTML);
    });
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alert', 'alert-warning');
    noResultado.textContent = 'No se encontraron resultados con esas características.';
    resultado.appendChild(noResultado);
}

function limpiarHTML() {
    resultado.innerHTML = '';
}

function guardarLocalStorage() {
    localStorage.setItem('busqueda', JSON.stringify(datosBusqueda));
}
