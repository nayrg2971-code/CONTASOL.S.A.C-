// Activar el acordeón de preguntas
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Cerrar todas primero
        document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
        
        // Abrir la seleccionada
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

// Confeti y WhatsApp
function agendarCita() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
        window.open("https://wa.me/51943706614", "_blank");
    }, 1000);
}
