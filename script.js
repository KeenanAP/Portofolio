
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const text = "Keenan Arelian Purnama";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = () => {
    typeWriter();
    revealOnScroll();
};
