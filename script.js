function mostrarCalendario() {
  document.getElementById("calendario").classList.remove("hidden");
}

function reservarCita() {
  confetti({
    particleCount: 180,
    spread: 80,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.open("https://wa.me/51943706614", "_blank");
  }, 1200);
}

function chat(tipo) {
  let mensaje = "";

  if (tipo === "pequeña") mensaje = "Hola, tengo una empresa pequeña y necesito asesoría tributaria";
  if (tipo === "mediana") mensaje = "Hola, tengo una empresa mediana y busco planificación fiscal";
  if (tipo === "grande") mensaje = "Hola, represento una empresa grande y necesito auditoría";

  window.open("https://wa.me/51943706614?text=" + encodeURIComponent(mensaje), "_blank");
}
