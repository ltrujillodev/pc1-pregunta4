// Función para capturar los datos de los estudiantes y calcular el promedio
function calcularPromedio() {
  // Array de estudiantes
  let estudiantes = [];

  // Capturamos los valores de los inputs y los añadimos al array de estudiantes como objetos
  for (let i = 1; i <= 5; i++) {
    let nom = document.getElementById(`nombre${i}`).value;
    let cal = parseFloat(document.getElementById(`nota${i}`).value);
    estudiantes.push({ nombre: nom, nota: cal });
  }

  // Calculamos el promedio de las notas
  let sumaNotas = estudiantes.reduce(
    (sum, estudiante) => sum + estudiante.nota,
    0
  );
  let promedio = sumaNotas / estudiantes.length;

  // Filtramos estudiantes con notas mayores y menores al promedio
  let mayoresAlPromedio = estudiantes.filter(
    (estudiante) => estudiante.nota > promedio
  );
  let menoresAlPromedio = estudiantes.filter(
    (estudiante) => estudiante.nota < promedio
  );

  // Mostramos los resultados en el HTML
  let resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = `
      <h2>Resultados</h2>
      <p>Promedio de Notas: ${promedio.toFixed(2)}</p>
      <h3>Estudiantes con Notas Mayores al Promedio:</h3>
      <ul>${mayoresAlPromedio
        .map((est) => `<li>${est.nombre} - Nota: ${est.nota}</li>`)
        .join("")}</ul>
      <h3>Estudiantes con Notas Menores al Promedio:</h3>
      <ul>${menoresAlPromedio
        .map((est) => `<li>${est.nombre} - Nota: ${est.nota}</li>`)
        .join("")}</ul>
  `;
}
