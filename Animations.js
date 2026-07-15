console.log("script loaded");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".picT, .descT").forEach(el => observer.observe(el));