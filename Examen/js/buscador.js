function searchItems() {
  const input = document.getElementById("search-input");
  const searchTerm = input.value.toLowerCase().trim();

  if (searchTerm === "") return;

  // Elementos que contienen texto en la página
  const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a, li, td, th, button");

  let found = false;

  elements.forEach(el => {
    const text = el.textContent.toLowerCase();

    // Limpiar estilos previos
    el.style.backgroundColor = "transparent";
    el.style.borderRadius = "";

    if (text.includes(searchTerm)) {
      if (!found) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      el.style.backgroundColor = "#ffc107";
      el.style.borderRadius = "5px";
      found = true;
    }
  });

  if (!found) {
    alert("No se encontraron coincidencias en la página.");
  }
}