document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculadoraForm');
    const cargoSelect = document.getElementById('cargo');
    const sueldoBrutoInput = document.getElementById('sueldoBruto');
    const resultadoTexto = document.getElementById('resultadoTexto');
    
    cargoSelect.addEventListener('change', function() {
        if (this.value) {
            sueldoBrutoInput.value = this.value;
        } else {
            sueldoBrutoInput.value = '';
        }
    });
    
    document.getElementById('dni').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 8) {
            this.value = this.value.substring(0, 8);
        }
    });
    
    document.getElementById('nombre').addEventListener('input', function(e) {
        this.value = this.value.replace(/[^A-Za-záéíóúñÁÉÍÓÚÑ\s]/g, '');
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dni = document.getElementById('dni').value;
        const nombre = document.getElementById('nombre').value;
        const cargo = cargoSelect.options[cargoSelect.selectedIndex].text;
        const sueldoBruto = parseFloat(sueldoBrutoInput.value);
        const descuento = parseFloat(document.getElementById('descuento').value);
        
        if (!dni || !nombre || !cargoSelect.value || isNaN(descuento)) {
            alert('Por favor complete todos los campos correctamente');
            return;
        }
        
        const sueldoNeto = sueldoBruto - (sueldoBruto * descuento / 100);
        
        resultadoTexto.innerHTML = `
            <strong>Empleado:</strong> ${nombre} (DNI: ${dni})<br>
            <strong>Cargo:</strong> ${cargo}<br>
            <strong>Sueldo Bruto:</strong> S/ ${sueldoBruto.toFixed(2)}<br>
            <strong>Descuento (${descuento}%):</strong> S/ ${(sueldoBruto * descuento / 100).toFixed(2)}<br>
            <strong>Sueldo Neto:</strong> S/ ${sueldoNeto.toFixed(2)}
        `;
    });
});