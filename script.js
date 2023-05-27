// Obtener elementos del formulario
const cantidadInput = document.getElementById("formControlCantidad");
const categoriaSelect = document.getElementById("formControlCategoria");
const resumenButton = document.querySelector(".btn.btn-success.ms-2.w-50");
const borrarButton = document.querySelector(".btn.btn-success.me-2.w-50");

// Agregar evento click al botón de resumen
resumenButton.addEventListener("click", generarResumen);

// Agregar evento click al botón de borrar
borrarButton.addEventListener("click", borrarCampos);

// Función para generar el resumen
function generarResumen() {
  const cantidad = parseInt(cantidadInput.value);
  const categoria = categoriaSelect.value;

  let descuento;
  if (categoria === "Estudiante") {
    descuento = 80;
  } else if (categoria === "Trainee") {
    descuento = 50;
  } else if (categoria === "Junior") {
    descuento = 15;
  } else {
    descuento = 0;
  }

  const totalPagar = cantidad * (200 - (200 * descuento) / 100);
  const totalPagarSpan = document.getElementById("totalPagarSpan");
  totalPagarSpan.textContent = totalPagar.toFixed(2);
}

// Función para borrar los campos
function borrarCampos() {
  cantidadInput.value = "";
  categoriaSelect.value = "Estudiante";
  document.getElementById("formControlNombre").value = "";
  document.getElementById("formControlApellido").value = "";
  document.getElementById("formControlCorreo").value = "";
  document.getElementById("totalPagarSpan").textContent = "";
}