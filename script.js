document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("header h1");
    title.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    title.style.transition = "opacity 1s, transform 1s";

    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 500);
});
