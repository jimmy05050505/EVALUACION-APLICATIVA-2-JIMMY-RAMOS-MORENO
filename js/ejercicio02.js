document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consumoForm');
    const tipoVehiculoSelect = document.getElementById('tipoVehiculo');
    const consumoInput = document.getElementById('consumo');
    const distanciaInput = document.getElementById('distancia');
    const resultadoTexto = document.getElementById('resultadoTexto');
    
    tipoVehiculoSelect.addEventListener('change', function() {
        if (this.value) {
            consumoInput.value = this.value;
        } else {
            consumoInput.value = '';
        }
    });
    
    consumoInput.addEventListener('input', function() {
        if (this.value <= 0) {
            this.setCustomValidity('El consumo debe ser un número positivo');
        } else {
            this.setCustomValidity('');
        }
    });
    
    distanciaInput.addEventListener('input', function() {
        if (this.value <= 0) {
            this.setCustomValidity('La distancia debe ser un número positivo');
        } else {
            this.setCustomValidity('');
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tipoVehiculo = tipoVehiculoSelect.options[tipoVehiculoSelect.selectedIndex].text.split(' - ')[0];
        const consumo = parseFloat(consumoInput.value);
        const distancia = parseFloat(distanciaInput.value);
        
        if (isNaN(consumo) || isNaN(distancia) || consumo <= 0 || distancia <= 0) {
            alert('Por favor ingrese valores válidos (números positivos)');
            return;
        }
        
        const litrosNecesarios = distancia / consumo;
        
        resultadoTexto.innerHTML = `
            <strong>Tipo de vehículo:</strong> ${tipoVehiculo}<br>
            <strong>Consumo:</strong> ${consumo.toFixed(1)} km/l<br>
            <strong>Distancia:</strong> ${distancia.toFixed(1)} km<br>
            <strong>Combustible necesario:</strong> ${litrosNecesarios.toFixed(2)} litros
        `;
    });
});