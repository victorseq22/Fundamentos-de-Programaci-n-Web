
function opciones(evt, info){

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for ( i= 0; i< tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for ( i= 0; i< tabcontent.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}