function evaluarEncuesta(){
    // pregunta 1 y 2 
    var pregunta1 = document.getElementById("r1").value 
    var pregunta2 = document.getElementById("r2").value 

    // codigo para saber la opcion elegida en el input radio de la pregunta 3
    var respuesta3 =""
    document.getElementsByName("opinion")
    //ciclo con funcion flecha
    .forEach(radio => {
        if (radio.checked){
            console.log(radio.value);
            //variable que almacena el valor del radio marcado
            respuesta3 = radio.value
        }
    });

    //Codigo para saber la opcion elegida en el input radio de la respuesta 4
    var respuesta4 = ""
    document.getElementsByName("opinion2")
        //ciclo con funcion flecha
        .forEach(radio => {
            if (radio.checked){
            console.log(radio.value);
            //variable que almacena el valor del radio marcado
            respuesta4= radio.value
            }
        });

        //validacion de los datos ingresados 
        if (pregunta1 == "" || pregunta2 == "" || respuesta3 == "" || respuesta4 == ""){
            swal.fire({
                title: "Atencion usuario",
                text: "No deje espacios vacios",
                icon: "warning",
            })
        } else {
            //condicionales que determinan las opciones seleccionados por el cliente 
            //uso de operadores logicos AND-OR y controles para obtener resultados especificos de la encuesta

            var mensaje1 = "";
            // if (document.formulario.atencion.checked == true && document.formulario.calidad.checked == true &&
            //     document.formulario.servicio.checked == true){
            //         mensaje1 = "Gracias por confiar en nosotros y calificarnos bien en nuestros servicios";
            //     } else if (document.formulario.atencion.checked == false || document.formulario.calidad.checked == false ||
            //         document.formulario.servicio.checked == false){
            //             mensaje1 = "Gracias por sus respuestas, tomaremos en cuenta sus respuesta para mejorar";
            //     } else if (document.formulario.atencion.checked == false && document.formulario.calidad.checked == false &&
            //             document.formulario.servicio.checked == false){
            //                 mensaje1 = "Gracias por sus respuestas, lamentamos que no haya tenido la mejor experiencia...";
            //     } 

                var mensaje3 = "";
                if (respuesta4 == "Buena"){
                    mensaje3 = "APreciamos que calfique nuestra atención al cliente de buena manera";
                }else if (respuesta4 == "Regular"){
                    mensaje3 = "Agradecemos su sinceridad acerca de nuestros servicios al cliente...";
                }else {
                    mensaje3 = "Lamentamos nuestra atencion al cliente le haya decepcionado...";
                }

                var mensaje2 ="";
                if (respuesta3 == "Si"){
                    mensaje2 = "Gracias por preferirnos y poder darnos otra posible visita";
                } else {
                    mensaje2 ="Gracias por su respuesta, intentaremos mejorar";
                }

                //desplegable aparecera cuando el cliente da clic en el boton Enviar
                swal.fire({
                    title: "Respuesta enviadas",
                    text: "Gracias por realizar nuestra encuesta",
                    icon: "success",

                })
                //resultado de la encuesta
                document.getElementById("res0").innerHTML ="Gracias por sus respuestas";
                //se traen los mensajes brindados a los clientes al HTML pagina web
                document.getElementById("res1").innerHTML = mensaje2;
                document.getElementById("res2").innerHTML = mensaje3;
                document.getElementById("res3").innerHTML = mensaje1;

        }

}

//limpiar los controles a su estado original
function limpiarFormulario (){
    //variables
    document.getElementById("r1").value ="";
    document.getElementById("r2").value ="";
    //radios
    var opcionesRadio3 = document.getElementsByName("opinion");
    opcionesRadio3.forEach(radio => (radio.checked = false ));
    var opcionesRadio4 = document.getElementsByName("opinion2");
    opcionesRadio4.forEach(radio => (radio.checked = false ));

    //checkbox
    //document.getElementById("calidad").checked = false;
    //document.getElementById("atencion").checked = false;
    //document.getElementById("servicio").checked = false;
    document.getElementById("radio").checked = false;
    document.getElementById("youtube").checked = false;
    document.getElementById("facebook").checked = false;
    //resultados en la pagina web
    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";
}