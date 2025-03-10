function generarFactura() {
    let cliente = document.getElementById("cliente").value.trim();
    let articulo = document.getElementById("articulo").value.trim();
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);
    
    if (!cliente || !articulo || isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
        alert("Por favor, ingrese datos válidos.");
        return;
    }
    
    let subtotal = cantidad * precio;
    let iva = subtotal * 0.13;
    let servicio = subtotal * 0.05;
    let total = subtotal + iva + servicio;
    
    document.getElementById("factura-info").innerText = `Cliente: ${cliente}`;
    document.getElementById("factura-articulo").innerText = articulo;
    document.getElementById("factura-cantidad").innerText = cantidad;
    document.getElementById("factura-precio").innerText = `$${precio.toFixed(2)}`;
    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("iva").innerText = `$${iva.toFixed(2)}`;
    document.getElementById("servicio").innerText = `$${servicio.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
    
    document.getElementById("factura").style.display = "block";
}

function resetFactura() {
    document.getElementById("factura").style.display = "none";
}

function imprimirFactura() {
    window.print();
}