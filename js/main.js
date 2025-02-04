function handleScroll() {
    const header = document.querySelector('.transparent-header');
    if (header.classList.contains('open')) {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

const hamMenu = document.querySelector('.ham-menu');
const header = document.querySelector('.transparent-header');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    header.classList.toggle("open");

    handleScroll();
});


document.addEventListener("DOMContentLoaded", function() {
    handleScroll();  

    
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});