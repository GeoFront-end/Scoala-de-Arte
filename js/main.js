function handleScroll() {
    const header = document.querySelector('.main-header');
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



const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if(!activePanel) return;
    toggleAccordion(activePanel);
})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll('button');
    const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');

    buttons.forEach((button) => {
        button.setAttribute('aria-expanded', false)
    });

    contents.forEach((contents) => {
        contents.setAttribute('aria-hidden', true)
    });

    panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
}


document.addEventListener("DOMContentLoaded", function() {
    handleScroll();  

    
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});