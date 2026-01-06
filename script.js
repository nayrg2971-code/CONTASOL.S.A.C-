// Función para el confeti al agendar
function confirmarCita() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f37021', '#c9a14a', '#2c1e1a']
    });

    setTimeout(() => {
        const mensaje = encodeURIComponent("Hola CONTASOL SAC, deseo confirmar mi cita agendada desde la web.");
        window.open(`https://wa.me/51943706614?text=${mensaje}`, '_blank');
    }, 1000);
}

// Control del Chatbot
function toggleChat() {
    const chat = document.getElementById('chatbot');
    chat.style.display = (chat.style.display === 'block') ? 'none' : 'block';
}
