var toggle = document.getElementById('toggle');
var nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
    toggle.classList.toggle('nav-btn');
});
