// Function to handle smooth scrolling when header is open
function handleScroll() {
    const header = document.querySelector('.transparent-header');
    if (header.classList.contains('open')) {
        // Using window.scrollTo with options to enable smooth scroll behavior
        window.scrollTo({
            top: 0,  // Scroll to 200px from the top
            behavior: 'smooth'  // Smooth scrolling
        });
    }
}

// Toggle Menu and Header Class
const hamMenu = document.querySelector('.ham-menu');
const header = document.querySelector('.transparent-header');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    header.classList.toggle("open");

    // Check if header has 'open' class after the click and scroll smoothly
    handleScroll();
});

// Automatically scroll to a specific position if the 'open' class is present when the page loads
document.addEventListener("DOMContentLoaded", function() {
    handleScroll();  // Call handleScroll to handle the initial state of 'open' class

    // Set current year in the specified element
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});