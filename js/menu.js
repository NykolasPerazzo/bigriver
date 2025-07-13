document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuNav = document.getElementById('menuNav');

    menuToggle.addEventListener('click', () => {
        menuNav.classList.toggle('show');
    });
});



