const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.75
});

document.querySelectorAll(".top-Title, .mentorTitle, .projectTitle, .project, .mentor, .projectDescription").forEach(el => observer.observe(el));