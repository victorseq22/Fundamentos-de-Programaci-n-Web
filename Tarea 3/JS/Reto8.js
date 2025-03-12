let estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
        actualizarLista();
        
        function agregarEstudiante() {
            let nombre = document.getElementById("nombre").value;
            let apellidos = document.getElementById("apellidos").value;
            let nota1 = parseFloat(document.getElementById("nota1").value);
            let nota2 = parseFloat(document.getElementById("nota2").value);
            let nota3 = parseFloat(document.getElementById("nota3").value);
            
            if (nombre && apellidos && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
                let estudiante = { nombre, apellidos, notas: [nota1, nota2, nota3] };
                estudiantes.push(estudiante);
                localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
                actualizarLista();
                alert("Estudiante agregado correctamente.");
            } else {
                alert("Por favor, complete todos los campos correctamente.");
            }
        }
        
        function actualizarLista() {
            let lista = document.getElementById("listaEstudiantes");
            lista.innerHTML = '<option value="">Seleccione un estudiante</option>';
            estudiantes.forEach((est, index) => {
                let option = document.createElement("option");
                option.value = index;
                option.textContent = `${est.nombre} ${est.apellidos}`;
                lista.appendChild(option);
            });
        }
        
        function calcularPromedio() {
            let indice = document.getElementById("listaEstudiantes").value;
            if (indice !== "") {
                let estudiante = estudiantes[indice];
                let promedio = estudiante.notas.reduce((a, b) => a + b, 0) / estudiante.notas.length;
                document.getElementById("resultado").textContent = `Promedio de ${estudiante.nombre}: ${promedio.toFixed(2)}`;
            } else {
                alert("Seleccione un estudiante para calcular el promedio.");
            }
        }


        