const list = document.querySelectorAll('.navList');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navMenu ul li");
    const indicator = document.querySelector(".indicator");
    const navList = document.querySelector(".navMenu ul"); 

    function updateIndicator() {
        const activeItem = document.querySelector(".navMenu ul li.active");

        if (activeItem && navList) {
            const icon = activeItem.querySelector(".icon i"); 
            const navRect = navList.getBoundingClientRect();
            const activeItemRect = activeItem.getBoundingClientRect();
            const iconRect = icon.getBoundingClientRect();

            
            const iconCenter = iconRect.left - navRect.left + iconRect.width / 2;


            const navListWidth = navList.offsetWidth;
            const navListHeight = navList.offsetHeight;

            
            const indicatorSize = Math.min(navListWidth, navListHeight); 

            
            indicator.style.width = `${indicatorSize}px`;
            indicator.style.height = `${indicatorSize}px`;

            
            indicator.style.borderRadius = "50%";

            
            indicator.style.left = `${activeItemRect.left + (activeItemRect.width / 2) - (indicator.offsetWidth / 2)}px`;


            indicator.style.bottom = `35px`;
        }
    }

    updateIndicator();

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");
            updateIndicator();
        });
    });

    window.addEventListener("resize", updateIndicator);
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


const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduse)").matches){
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}