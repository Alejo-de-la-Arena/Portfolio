
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const inputSubmit = document.querySelector('#inputSubmit');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                });
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

        if (inputSubmit) {
            inputSubmit.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    };
});