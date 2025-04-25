window.addEventListener('load', init, false);

function init() {
 let email = document.getElementById('inscriptionTxt');
 let btnEnviar = document.getElementById('btnSend');
 let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
 let alerta = document.getElementById('mensajeAlert');

 btnEnviar.onclick = function () {
 email = inscriptionTxt.value;

 if (email === '') {
 alerta.textContent = 'El campo email está vacío';
 alerta.classList.add('alertaRoja');
 alerta.classList.remove('alertaVerde');
 } else if (!expressionEmail.test(email)) {
 alerta.textContent = 'Email inválido';
 alerta.classList.add('alertaRoja');
 alerta.classList.remove('alertaVerde');
 } else {
 alerta.textContent = 'Su registro fue exitoso';
 alerta.classList.add('alertaVerde');
 alerta.classList.remove('alertaRoja');

 //service ID/template ID/ID form/public key cuenta
 //el id del formulario es form
 // Envío del formulario a través de EmailJS
 emailjs.sendForm('service_ntgvl9b','template_n5ogivk','#form2','fUCEjecOYhQKT1suy')

 cleanInputs();
 }
 }
}

function cleanInputs() {
 inscriptionTxt.value = '';
}