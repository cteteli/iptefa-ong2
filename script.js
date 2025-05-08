document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 1s";
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
        });
    }, 500);
});
