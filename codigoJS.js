function mostrarInfo() {
    let primerNombre = document.getElementById('p-nombre').value;
    let segundoNombre = document.getElementById('s-nombre').value;
    let primerApellido = document.getElementById('p-apellido').value;
    let segundoApellido = document.getElementById('s-apellido').value;

    let nombreCompleto = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
    document.getElementById('nombre-completo').textContent = nombreCompleto;

    let dni = document.getElementById('dni').value;
    let ultimoDigitoDNI = dni.slice(-1);
    document.getElementById('ultimo-dni').textContent = ultimoDigitoDNI;

    let fechaNacimiento = document.getElementById('f-nacim').value;

    let fechaNacimientoCompleta = new Date(fechaNacimiento);
    let fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimientoCompleta.getFullYear();

    if (
        fechaActual.getMonth() < fechaNacimientoCompleta.getMonth() ||
        (fechaActual.getMonth() === fechaNacimientoCompleta.getMonth() &&
            fechaActual.getDate() < fechaNacimientoCompleta.getDate())
    ) {
        edad--;
    }
    document.getElementById('edad').textContent = edad;
}