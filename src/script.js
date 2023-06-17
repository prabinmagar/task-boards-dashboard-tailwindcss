const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.add('translate-x-0');
});

navbarHideBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('translate-x-0');
})