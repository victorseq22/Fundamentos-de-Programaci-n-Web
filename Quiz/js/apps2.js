var panorama1 = new PANOLENS.ImagePanorama('imagenes/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg');
var duration = 1000;

var viewer = new PANOLENS.Viewer({
    container: document.querySelector('#panorama-container'),
});


var infospot1_1 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot1_10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

//ubicacion de las zonas infospot XYZ
infospot1_1.position.set(351, -271, -500);
infospot1_2.position.set(500, -88, -19);
infospot1_3.position.set(-494, 77, -500);
infospot1_4.position.set(329, 1, 500);
infospot1_5.position.set(500, -22, -185);
infospot1_6.position.set(-501, 112, -314);
infospot1_7.position.set(-500, 2, 103);
infospot1_8.position.set(-96, -4, 500);
infospot1_9.position.set(500, 228, 269);
infospot1_10.position.set(220, 40, 500);


//agregar las zonas infospot
panorama1.add(infospot1_1);
panorama1.add(infospot1_2);
panorama1.add(infospot1_3);
panorama1.add(infospot1_4);
panorama1.add(infospot1_5);
panorama1.add(infospot1_6);
panorama1.add(infospot1_7);
panorama1.add(infospot1_8);
panorama1.add(infospot1_9);
panorama1.add(infospot1_10);

//contenido de los infospot1
infospot1_1.addHoverText('Visite la panoramica #1', 10);
infospot1_1.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Piscina Z#1</div>';

panorama1.add(infospot1_1);

//contenido de los infospot2
infospot1_2.addHoverText('Visite la panoramica #3', -10);
infospot1_2.element.innerHTML = '<div style="background-color: rgba(216, 17, 110, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Mesas Z#2</div>';
panorama1.add(infospot1_2);

//contenido de los infospot3
infospot1_3.addHoverText('Visite la panoramica #4', -10);
infospot1_3.element.innerHTML = '<div style="background-color: rgb(17, 216, 34); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Futuros apartamentos Z#3</div>';
panorama1.add(infospot1_3);

//contenido de los infospot4
infospot1_4.addHoverText('Visite la panoramica #1', -10);
infospot1_4.element.innerHTML = '<div style="background-color: rgb(216, 213, 17); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Baños Z#4</div>';
panorama1.add(infospot1_4);

//contenido de los infospot5
infospot1_5.addHoverText('Visite la panoramica #1', -10);
infospot1_5.element.innerHTML = '<div style="background-color: rgb(17, 216, 34); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Zona privada Z#5</div>';
panorama1.add(infospot1_5);

//contenido de los infospot6
infospot1_6.addHoverText('Visite la panoramica #1', -10);
infospot1_6.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Hotel 3 Estrellas Z#6</div>';
panorama1.add(infospot1_6);

//contenido de los infospot7
infospot1_7.addHoverText('Visite la panoramica #1', -10);
infospot1_7.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Banco Del Estado Z#7</div>';
panorama1.add(infospot1_7);

//contenido de los infospot8
infospot1_8.addHoverText('Visite la panoramica #1', -10);
infospot1_8.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Zona turistica Z#8</div>';
panorama1.add(infospot1_8);

//contenido de los infospot9
infospot1_9.addHoverText('Visite la panoramica #1', -10);
infospot1_9.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Gimnasio Z#9</div>';
panorama1.add(infospot1_9);

//contenido de los infospot10
infospot1_10.addHoverText('Visite la panoramica #1', -10);
infospot1_10.element.innerHTML = '<div style="background-color: rgb(64, 56, 141); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px;">Reglas de la piscina Z#10</div>';
panorama1.add(infospot1_10);






// desplazamiento de los infospots
infospot1_1.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_2.position);
});
infospot1_2.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_3.position);
});
infospot1_3.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_4.position);
});
infospot1_4.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_5.position);
});
infospot1_5.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_6.position);
});
infospot1_6.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_7.position);
});
infospot1_7.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_8.position);
});
infospot1_8.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_9.position);
});
infospot1_9.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_10.position);
});
infospot1_10.addEventListener('click', function() {
    
    viewer.tweenControlCenter(infospot1_1.position);
});

viewer.add(panorama1);