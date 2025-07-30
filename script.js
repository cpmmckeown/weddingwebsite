// Smooth scroll variables
let targetScroll = 0;
let currentScroll = 0;
let ease = 0.1;

const scrollWrapper = document.getElementById('scroll-wrapper');
const mainContent = document.querySelector('.main-content');

// Set wrapper height to allow scrolling
function setBodyHeight() {
    document.body.style.height = `${mainContent.getBoundingClientRect().height}px`;
}

// Smooth scroll logic
function smoothScroll() {
    targetScroll = window.scrollY;
    currentScroll += (targetScroll - currentScroll) * ease;

    mainContent.style.transform = `translateY(-${currentScroll}px)`;

    requestAnimationFrame(smoothScroll);
}

// Initial setup
setBodyHeight();
smoothScroll();
window.addEventListener('resize', setBodyHeight);