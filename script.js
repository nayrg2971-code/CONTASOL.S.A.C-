document.addEventListener('DOMContentLoaded', () => {
    // Función para abrir/cerrar preguntas
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});

function agendarCita() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
        window.open("https://wa.me/51943706614", "_blank");
    }, 1000);
}
