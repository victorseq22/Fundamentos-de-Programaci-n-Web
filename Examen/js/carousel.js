//variable de arreglo 
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto
micarrusel = [{ imageurl: "imagenes/desayuno 2.jpg", titulo: "Desayuno 2" },
    { imageurl: "imagenes/almuerzo 1.jpg", titulo: "Almuerzo 1" },
    { imageurl: "imagenes/desayuno 5.jpg", titulo: "Desayuno 5" },
    { imageurl: "imagenes/postre1.jpg", titulo: "Postre 1" },
    { imageurl: "imagenes/postre5.jpg", titulo: "Postre 5" }
];

//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas){
    //almacena la cantida total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total){
        foto = 1
    }
    if (foto < 1 ){
        //tiene la cantidad total de imagenes 
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    //permite apuntar al arreglo de las fotos con la ruta de cada una 
    document.thumb.src = micarrusel[foto - 1].imageurl;
    //asignacion del ID titulo 
    titulo = document.getElementById('titulo');
    //asignacion del arreglo para referenciar la foto con el titulo
    titulo.innerText = micarrusel[foto - 1].titulo;
}