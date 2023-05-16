/* toggle icon navbar */

/* scroll section */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onescroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* sticky navbat */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.ScrollY > 100)
};