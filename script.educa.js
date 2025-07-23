window.addEventListener("DOMContentLoaded", () => {
  console.log("Copilot AI activo desde la nube chapina ✌️");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = `Hola, soy ${nombre}. Quiero decir: ${mensaje}`;
  const numero = "44797765";
  window.open(`https://wa.me/502${44797765}?text=${encodeURIComponent(texto)}`, "_blank");
}

function validarRegistro() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario && clave === "EDUCAEC") {
    localStorage.setItem("usuarioValido", usuario);
    window.location.href = "index.educa.html";
  } else {
    alert("Lo sentimos hemos encontrado que la clave Ingresada es incorrecta");
  }
}
