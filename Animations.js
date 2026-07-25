const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer1.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".picT, .descT, .titleT2, .Contact, .contact, .githubTitle, #barForegroundOther, #barForegroundC, #barForegroundHtml, #barForegroundCss, #barForegroundJava").forEach(el => observer1.observe(el));