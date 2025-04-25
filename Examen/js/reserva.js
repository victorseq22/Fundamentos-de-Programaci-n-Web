'use strict';

const input_nombre_completo = document.querySelector('#txt-nombre_completo');
const input_fecha_entrada = document.querySelector('#txt-fecha_reserva');
const input_cantidad_personas = document.querySelector('#txt-cantidad_personas');
const input_time = document.querySelector('#txt-time');
const input_email = document.querySelector('#txt-correo');
const input_telefono = document.querySelector('#txt-telefono');
const boton_reservar = document.querySelector('#btn-reservar');

const validar_contra_blancos = () => {
    let error = false;
    let elementos_requeridos = document.querySelectorAll('[required]');

    for (let i = 0; i < elementos_requeridos.length; i++) {
        if (elementos_requeridos[i].value == '') {
            elementos_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            elementos_requeridos[i].classList.remove('input-error');
        }
    }

    if (!validar_correo()) {
        input_email.classList.add('input-error');
        error = true;
    }

    return error;
};

const validar_correo = () => {
    const regex = /^[a-z._\d]+@[a-z\d]+\.[a-z]+\.?[a-z]+?$/;
    return regex.test(input_email.value);
};

const limpiar = () => {
    document.querySelector('#form2').reset();
};

const obtener_datos = () => {
    let error = validar_contra_blancos();

    if (error) {
        Swal.fire({
            title: 'No se han podido enviar sus datos.',
            text: 'Por favor revisar los campos resaltados de color rojo del formulario.',
            icon: 'warning'
        });
    } else {
        Swal.fire({
            title: '¡Formulario completado!',
            text: 'Enviando reservación...',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500
        });

        emailjs.sendForm('service_v044gpb', 'template_t3u01tf', '#form2', 'CogkTQ8WQmrKn-V8-')
            .then(() => {
                Swal.fire({
                    title: 'Reservación enviada',
                    text: '¡Gracias por reservar con nosotros!',
                    icon: 'success'
                });
                limpiar();
            }, (error) => {
                Swal.fire({
                    title: 'Error al enviar',
                    text: 'Intente nuevamente más tarde.',
                    icon: 'error'
                });
                console.error('EmailJS Error:', error);
            });
    }
};

boton_reservar.addEventListener('click', obtener_datos);
