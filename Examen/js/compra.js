
  // Precios por platillo
  const preciosPlatillos = {
    desayuno: {
      "huevos": { nombre: "Huevos con tostadas", precio: 2500, imagen: "imagenes/desayuno 4.jpg" },
      "pancakes": { nombre: "Pancakes con miel", precio: 2500, imagen: "imagenes/desayuno 2.jpg" }
    },
    almuerzo: {
      "pollo": { nombre: "Pollo asado con arroz", precio: 3500, imagen: "imagenes/almuerzo 1.jpg" },
      "carne": { nombre: "Carne a la plancha", precio: 3500, imagen: "imagenes/almuerzo 5.jpg" }
    },
    cena: {
      "pasta": { nombre: "Sandwich", precio: 3500, imagen: "imagenes/cena2.jpg" },
      "sopa": { nombre: "Ensalada", precio: 3500, imagen: "imagenes/cena3.webp" }
    },
    postre: {
      "helado": { nombre: "Cheescake", precio: 2300, imagen: "imagenes/postre3.jpg" },
      "torta": { nombre: "Torta de chocolate", precio: 2200, imagen: "imagenes/postre4.jpg" }
    }
  };

  // Precios de bebidas
  const preciosBebidas = {
    agua: 500,
    jugo: 1500,
    gaseosa: 1500,
    cafe: 1200
  };

  // Función para cargar platillos según tipo seleccionado
  function cargarPlatillos() {
    const tipo = document.getElementById("tipoComida").value;
    const platilloSelect = document.getElementById("platillo");

    platilloSelect.innerHTML = `<option value="">-- Seleccionar platillo --</option>`;

    if (preciosPlatillos[tipo]) {
      for (const clave in preciosPlatillos[tipo]) {
        const opcion = document.createElement("option");
        opcion.value = clave;
        opcion.textContent = preciosPlatillos[tipo][clave].nombre;
        platilloSelect.appendChild(opcion);
      }
    }
  }

  // Función para calcular el total y mostrar resultados
  function calcularCuota() {
    const tipo = document.getElementById("tipoComida").value;
    const platillo = document.getElementById("platillo").value;
    const bebida = document.getElementById("bebida").value;
    const cuota = document.getElementById("cuota");
    const imagen = document.getElementById("home-image");

    if (tipo && platillo && bebida) {
      const datosPlatillo = preciosPlatillos[tipo][platillo];
      const precioBebida = preciosBebidas[bebida];

      const total = datosPlatillo.precio + precioBebida;

      cuota.innerHTML = `
        <strong>Platillo:</strong> ${datosPlatillo.nombre}<br>
        <strong>Bebida:</strong> ${bebida}<br>
        <strong>Total a pagar:</strong> ₡${total.toFixed(2)}
      `;

      imagen.src = datosPlatillo.imagen;
      imagen.style.display = "block";
    } else {
      cuota.textContent = "Por favor selecciona tipo, platillo y bebida.";
      imagen.style.display = "none";
    }
    
  }



  function mostrarFormularioCompra() {
    document.getElementById("seccionCompra").style.display = "block";
    window.scrollTo({
      top: document.getElementById("seccionCompra").offsetTop,
      behavior: "smooth"
    });
  }
  
  document.getElementById("formCompra").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Simulación de los datos seleccionados (esto lo deberías reemplazar por tu lógica real)
    const resumen = `
      Platillo: Ensalada — ₡3.500
      Bebida: Jugo Natural — ₡1.500
      Total a pagar: ₡5.000
    `.trim();
  
    // Insertamos el resumen en el input oculto
    document.getElementById("detalles_orden").value = resumen;
  
    // Animación
    const contenedor = document.getElementById("mensajeConfirmacion");
    contenedor.innerHTML = `
      <div class="text-center">
        <iframe src="https://lottie.host/embed/5cea3003-0d54-4c69-a1b9-d48090e40aac/Sgl4FD7Ou4.json" 
                style="width: 300px; height: 300px; border: none;" 
                allowfullscreen></iframe>
        <br>
        <p class="fs-4 mt-2 text-light">¡Un momento! Estamos procesando tu compra...</p>
      </div>
    `;
    contenedor.style.display = "block";
  
    setTimeout(() => {
      contenedor.innerHTML = `<p class="text-success fs-4">✅ ¡Gracias por tu compra! Hemos recibido tu pedido.</p>
      <p class="text-success fs-4">✅ Recibiras un correo electronico con la factura de tu compra.</p>`;
    }, 3000);
  
    // Envío
    emailjs.sendForm('service_ntgvl9b', 'template_g0l35kn', '#formCompra', 'fUCEjecOYhQKT1suy')
      .then(() => console.log('Correo enviado'))
      .catch((error) => console.error('Error al enviar:', error));
  });
  

  function limpiarFormularioCompra() {
    // Limpia los formularios (tanto selección como pago si existen)
    const formCompra = document.getElementById("formCompra");
    if (formCompra) formCompra.reset();
  
    const formSeleccion = document.getElementById("formSeleccion");
    if (formSeleccion) formSeleccion.reset();
  
    // Limpia el resultado
    document.getElementById("cuota").innerHTML = "";
    document.getElementById("home-image").style.display = "none";
  }
  document.getElementById("btnLimpiar").addEventListener("click", function () {
    limpiarFormularioCompra();
  });

