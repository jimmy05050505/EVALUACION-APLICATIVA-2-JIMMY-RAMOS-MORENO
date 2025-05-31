document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imcForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoTexto = document.getElementById('resultadoTexto');

    function validarTexto(input) {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^A-Za-záéíóúñÁÉÍÓÚÑ\s]/g, '');
        });
    }

    validarTexto(nombreInput);
    validarTexto(apellidoInput);

    pesoInput.addEventListener('input', function() {
        if (this.value <= 0) {
            this.setCustomValidity('El peso debe ser positivo');
        } else {
            this.setCustomValidity('');
        }
    });

    alturaInput.addEventListener('input', function() {
        if (this.value <= 0) {
            this.setCustomValidity('La altura debe ser positiva');
        } else {
            this.setCustomValidity('');
        }
    });

    function clasificarIMC(imc) {
        if (imc < 18.5) return "Bajo peso";
        if (imc >= 18.5 && imc <= 24.9) return "Normal";
        if (imc >= 25.0 && imc <= 29.9) return "Sobrepeso";
        return "Obesidad";
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor ingrese valores válidos (números positivos)');
            return;
        }

        const imc = peso / (altura * altura);
        const clasificacion = clasificarIMC(imc);

        resultadoTexto.innerHTML = `
            <strong>Paciente:</strong> ${nombre} ${apellido}<br>
            <strong>Peso:</strong> ${peso.toFixed(1)} kg<br>
            <strong>Altura:</strong> ${altura.toFixed(2)} m<br>
            <strong>IMC:</strong> ${imc.toFixed(1)}<br>
            <strong>Clasificación:</strong> ${clasificacion}<br><br>
            <strong>Clasificación oficial OMS:</strong><br>
            • Menos de 18.5: Bajo peso<br>
            • 18.5 - 24.9: Normal<br>
            • 25.0 - 29.9: Sobrepeso<br>
            • 30 o más: Obesidad
        `;
    });
});