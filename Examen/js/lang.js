// traduccion en español e ingles
const translations = {
    es: {
        optionMenu1: "Inicio",
        optionMenu2: "Menú",
        optionMenu3: "Nosotros",
        optionMenu4: "Proveedores",
        optionMenu5: "Productos",
        optionMenu6: "De tu interés",
        optionMenu7: "Reserva",
        optionMenu8: "Suscripción",
        optionMenu9: "Contacto",
        title: "Sabor que enamora, calidad que sorprende",
        form: "Complete el siguiente formulario si desea contactarnos",
        form2: "Complete el siguiente formulario si desea hacer una reserva",
        name: "Nombre",
        lastname: "Apellido",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
        send: "Enviar",
        search: "Buscar",
        fullname: "Nombre completo",
        Numberofpeople: "Cantidad de personas",
        Reservationdate: "Fecha de reserva",
        hour: "Hora",
        location: "Ubicación",
        schedule: "Horario",
        socialmedia: "Redes Sociales",
        day: "Lunes a Domingo"
    },
    en: {
        optionMenu1: "Home",
        optionMenu2: "Menu",
        optionMenu3: "About Us",
        optionMenu4: "Suppliers",
        optionMenu5: "Products",
        optionMenu6: "Of your interest",
        optionMenu7: "Booking",
        optionMenu8: "Subscription",
        optionMenu9: "Contact",
        title: "Flavor that enchants, quality that surprises",
        form: "Complete the following form if you wish to contact us.",
        form2: "Complete the following form if you wish to make a reservation.",
        name: "Name",
        lastname: "Lastname",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send: "Send",
        search: "Search",
        fullname: "Full name",
        Numberofpeople: "Number of people",
        Reservationdate: "Reservation date",
        hour: "Hour",
        location: "Location", 
        schedule: "Schedule",
        socialmedia: "Social Media",
        day: "Monday to Sunday"
    }
};

function changeLanguage() {
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = translations[lang][key];
    });
}