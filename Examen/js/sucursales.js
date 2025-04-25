window.onload = function () {
    const restSelect = document.getElementById("rest");
    const outputImg = document.getElementById("output-img");
    const outputTxt = document.getElementById("output-txt");
    const card = document.getElementById("cardSucursal");
  
    restSelect.onchange = function (e) {
      const n = e.target.value;
  
      if (n === "") {
        card.style.display = "none";
        outputImg.innerHTML = "";
        outputTxt.innerHTML = "";
        return;
      }
  
      const imagen = `<img src='imagenes/${n}.jpg' class='img-fluid rounded-4' alt='restaurante' />`;
      const text = [
        "📍 Coronado - 500 sur del Banco Popular, frente a la Municipalidad",
        "📍 Curridabat - Frente al parque central de Curridabat"
      ];
  
      outputImg.innerHTML = imagen;
      outputTxt.innerHTML = text[n - 1];
  
      // Mostrar la tarjeta y aplicar animación
      card.style.display = "block";
      card.classList.remove("animate__fadeIn");
      void card.offsetWidth;
      card.classList.add("animate__fadeIn");

      card.style.backgroundColor = "#435e7a";
      card.style.color = "white";
      card.style.padding = "1rem";
      card.style.borderRadius = "1rem";
    };
  };