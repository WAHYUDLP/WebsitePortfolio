// navbar fixed

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    const toTop = document.querySelector('#toTop');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}


// ini untuk bagian burger

const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-aktif');
    navMenu.classList.toggle('hidden');
});

//klik diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != navMenu && e.target != burger) {
        burger.classList.remove('burger-aktif');
        navMenu.classList.add('hidden');
    }
});

// dark mod toggle
const darkTo = document.querySelector('#dark-toggle');
const htlm = document.querySelector('html');

darkTo.addEventListener('click', function () {
    if (darkTo.checked) {
        htlm.classList.add('dark');
        localStorage.theme = 'dark';

    } else {
        htlm.classList.remove('dark');
        localStorage.theme = 'light';

    }
});


//pindahkan posisi toggle
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkTo.checked = true;
} else {
    darkTo.checked = false;
}

