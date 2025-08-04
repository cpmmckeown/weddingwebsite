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

// Handle anchor link clicks manually
function setupAnchorNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElem = document.getElementById(targetId);

            if (targetElem) {
                const offset = targetElem.offsetTop;
                window.scrollTo({ top: offset });
            }
        });
    });
}

// If page loads with #section-2 in URL, jump to it
function scrollToHashOnLoad() {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            // Wait a moment to allow layout to settle
            setTimeout(() => {
                window.scrollTo({ top: target.offsetTop });
            }, 10);
        }
    }
}


// Initialize everything
function init() {
    setBodyHeight();
    setupAnchorNavigation();
    scrollToHashOnLoad();
    smoothScroll();
}

window.addEventListener('resize', setBodyHeight);
window.addEventListener('DOMContentLoaded', init);