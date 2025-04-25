function menu() {
    let seleccion = document.getElementById("opciones").value;

    switch (seleccion) {
      case "A":
        Swal.fire({
          icon: "success",
          title: "Retrato",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.href = "retrato.html";
        });
        return;
      //window.open("retrato.html","_self");
      case "B":
        Swal.fire({
          icon: "success",
          title: "Bodas",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.href = "boda.html";
        });
        return;
      //window.open("boda.html","_self");
      case "C":
        Swal.fire({
          icon: "success",
          title: "Paisajes",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          window.location.href = "paisaje.html";
        });
        return;
      //window.open("paisaje.html","_self");
    }
  }