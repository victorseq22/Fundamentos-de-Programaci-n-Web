/*funcionalidad de la galeria evento onchange*/

document.getElementById('menuOpciones').addEventListener('change', galeria);

$(document).ready(function(){
    galeria()
});

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "almuerzos":
            document.querySelector('.galeriaAlmuerzos').style.display = "block"
            document.querySelector('.galeriaDesayunos').style.display = "none"
            document.querySelector('.galeriaCenas').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            break;
        case "desayuno":
            document.querySelector('.galeriaAlmuerzos').style.display = "none"
            document.querySelector('.galeriaDesayunos').style.display = "block"
            document.querySelector('.galeriaCenas').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            break;
        case "cena":
            document.querySelector('.galeriaAlmuerzos').style.display = "none"
            document.querySelector('.galeriaDesayunos').style.display = "none"
            document.querySelector('.galeriaCenas').style.display = "block"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"
            break;
        case "bebidas":
            document.querySelector('.galeriaAlmuerzos').style.display = "none"
            document.querySelector('.galeriaDesayunos').style.display = "none"
            document.querySelector('.galeriaCenas').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "block"
            document.querySelector('.galeriaPostres').style.display = "none"
            break;
        case "postres":
            document.querySelector('.galeriaAlmuerzos').style.display = "none"
            document.querySelector('.galeriaDesayunos').style.display = "none"
            document.querySelector('.galeriaCenas').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "block"
            break;   
        default:
            document.querySelector('.galeriaAlmuerzos').style.display = "none"
            document.querySelector('.galeriaDesayunos').style.display = "none"
            document.querySelector('.galeriaCenas').style.display = "none"
            document.querySelector('.galeriaBebidas').style.display = "none"
            document.querySelector('.galeriaPostres').style.display = "none"

    }
}