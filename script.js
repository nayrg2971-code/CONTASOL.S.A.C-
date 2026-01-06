document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            const open = answer.style.display === "block";

            document.querySelectorAll(".faq-answer")
                .forEach(a => a.style.display = "none");

            answer.style.display = open ? "none" : "block";
        });
    });
});

function agendarCita() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
        });
    }

    setTimeout(() => {
        window.open(
            "https://wa.me/51943706614?text=Hola%20deseo%20información%20sobre%20sus%20servicios%20contables",
            "_blank"
        );
    }, 800);
}
