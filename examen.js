function obtenerEdades() {
    const numEstudiantes = document.getElementById("numEstudiantes").value;
    const estudiantes = [];
  
    for (let i = 1; i <= numEstudiantes; i++) {
      const edad = prompt(`Estudiante ${i} edad:`);
      estudiantes.push({ edad: parseInt(edad) });
    }
  
    estudiantes.sort((a, b) => b.edad - a.edad);
  
    let mayores = 0;
    let menores = 0;
  
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Orden mayor a menor:<br>";
  
    estudiantes.forEach((estudiante) => {
      resultado.innerHTML += `${estudiante.edad}<br>`;
      if (estudiante.edad >= 18) {
        mayores++;
      } else {
        menores++;
      }
    });
  
    resultado.innerHTML += `---------------------------<br>`;
    resultado.innerHTML += `Total mayores: ${mayores}<br>`;
    resultado.innerHTML += `Total menores: ${menores}<br>`;
  }
