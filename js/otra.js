
function calcularPresupuesto() {
  
    const formulario = document.querySelector("form");
    const inputs = formulario.querySelectorAll("input");

    const invitados = Number(inputs[0].value);
    const costoComida = Number(inputs[1].value);
    const costoBebida = Number(inputs[2].value);
    const decoracion = Number(inputs[3].value);
    const musica = Number(inputs[4].value);
    const porcentajePropina = Number(inputs[5].value);

   
    if (inputs[0].value === "" || invitados <= 0) {
        alert("Debes ingresar un número de invitados mayor que cero.");
        return;
    }

    
    for (let i = 1; i < inputs.length; i++) {
        if (inputs[i].value === "" || Number(inputs[i].value) < 0) {
            alert("Completa todos los campos con valores iguales o mayores que cero.");
            return;
        }
    }

   
    const comidaTotal = invitados * costoComida;
    const bebidaTotal = invitados * costoBebida;
    const subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    const propina = subtotal * (porcentajePropina / 100);
    const totalGeneral = subtotal + propina;
    const costoPorInvitado = totalGeneral / invitados;

    
    const filas = document.querySelectorAll("tbody tr");

    
    filas[0].children[1].textContent =
        comidaTotal.toLocaleString("es-CO");

    filas[1].children[1].textContent =
        bebidaTotal.toLocaleString("es-CO");

    filas[2].children[1].textContent =
        decoracion.toLocaleString("es-CO");

    filas[3].children[1].textContent =
        musica.toLocaleString("es-CO");

    filas[4].children[1].textContent =
        subtotal.toLocaleString("es-CO");

    filas[5].children[1].textContent =
        propina.toLocaleString("es-CO");

    filas[6].children[1].textContent =
        totalGeneral.toLocaleString("es-CO");

    filas[7].children[1].textContent =
        costoPorInvitado.toLocaleString("es-CO");
}
