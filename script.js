function agendarCita() {
    // Lanzar efecto de éxito
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Abrir WhatsApp después de un segundo
    setTimeout(() => {
        const url = "https://wa.me/51943706614?text=Hola CONTASOL, vi su web y quiero agendar una asesoría.";
        window.open(url, '_blank');
    }, 1000);
}
