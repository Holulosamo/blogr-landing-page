const d = document,
    hamburgerBtn = d.querySelector('.hamburguer-btn'),
    navMenu = d.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('close-icon');
    navMenu.classList.toggle('open');
});

