function toggleLanguage() 
    {
        currentLang = currentLang === 'en' ? 'fi' : 'en';
        document.querySelectorAll('[data-en]').forEach(el => {el.innerHTML = el.getAttribute(`data-${currentLang}`);});
    }

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobileToggle');

    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
     navbar.classList.toggle('open');
     mobileToggle.classList.toggle('open');

}

function closeMenu() {
    document.querySelector('.nav-links').classList.remove('show');
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.navbar').classList.remove('open');
    mobileToggle.classList.remove('open');
}
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // If menu isn't open, do nothing
    if (!menu.classList.contains('show')) return;

    // If click is inside navbar, do nothing
    if (navbar.contains(event.target)) return;

    // Otherwise, close menu
    menu.classList.remove('show');
    hamburger.classList.remove('active');
    navbar.classList.remove('open');
});
