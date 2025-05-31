document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prestamoForm');
    const montoInput = document.getElementById('monto');
    const interesInput = document.getElementById('interes');
    const plazoInput = document.getElementById('plazo');
    const resultadoTexto = document.getElementById('resultadoTexto');
    
    function validarPositivo(input) {
        input.addEventListener('input', function() {
            if (this.value <= 0) {
                this.setCustomValidity('Debe ingresar un valor positivo');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    validarPositivo(montoInput);
    validarPositivo(interesInput);
    validarPositivo(plazoInput);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const monto = parseFloat(montoInput.value);
        const interes = parseFloat(interesInput.value);
        const plazo = parseFloat(plazoInput.value);
        
        if (isNaN(monto) || isNaN(interes) || isNaN(plazo) || 
            monto <= 0 || interes <= 0 || plazo <= 0) {
            alert('Por favor ingrese valores válidos (números positivos)');
            return;
        }
        
        const interesCalculado = (monto * interes * plazo) / 100;
        const totalPagar = monto + interesCalculado;
        
        resultadoTexto.innerHTML = `
            <strong>Monto del préstamo:</strong> S/ ${monto.toFixed(2)}<br>
            <strong>Tasa de interés anual:</strong> ${interes.toFixed(2)}%<br>
            <strong>Plazo:</strong> ${plazo} año(s)<br><br>
            <strong>Interés a pagar:</strong> S/ ${interesCalculado.toFixed(2)}<br>
            <strong>Total a pagar:</strong> S/ ${totalPagar.toFixed(2)}
        `;
    });
});