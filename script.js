function agendarCita() {
    // Efecto de celebración
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f37021', '#c9a14a', '#ffffff']
    });

    // Redirección a WhatsApp después de un breve momento
    setTimeout(() => {
        const mensaje = encodeURIComponent("Hola CONTASOL SAC, deseo solicitar una consultoría contable desde su sitio web.");
        window.open(`https://wa.me/51943706614?text=${mensaje}`, '_blank');
    }, 1200);
}
