function convertirADolares() {
    let monto = parseFloat(document.getElementById("dolares").value);
    let tipoCambio = parseFloat(document.getElementById("tipoCambio1").value);
    
    if (isNaN(monto) || isNaN(tipoCambio) || monto <= 0 || tipoCambio <= 0) {
        alert("Ingrese valores válidos");
        return;
    }
    
    let resultado = monto * tipoCambio;
    document.getElementById("resultadoColones").value = `₡${resultado.toFixed(2)}`;
}

function convertirAColones() {
    let monto = parseFloat(document.getElementById("colones").value);
    let tipoCambio = parseFloat(document.getElementById("tipoCambio2").value);
    
    if (isNaN(monto) || isNaN(tipoCambio) || monto <= 0 || tipoCambio <= 0) {
        alert("Ingrese valores válidos");
        return;
    }
    
    let resultado = monto / tipoCambio;
    document.getElementById("resultadoDolares").value = `$${resultado.toFixed(2)}`;
}

function limpiarCampos(montoId, tipoCambioId, resultadoId) {
    document.getElementById(montoId).value = "";
    document.getElementById(tipoCambioId).value = "";
    document.getElementById(resultadoId).value = "";
}