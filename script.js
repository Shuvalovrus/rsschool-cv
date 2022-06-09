const navButtons = document.querySelectorAll('.navbar__link');

navButtons.forEach((item,index) => {
    item.addEventListener('click', (e) => {

        const sections = document.querySelectorAll('section');

        e.preventDefault();

        scrollTo(sections[index]);
    })
})

function scrollTo(elem) {
    const header = document.querySelector('header');

    window.scroll({
        left: 0,
        top: elem.offsetTop - header.offsetHeight - 15,
        behavior: 'smooth'
    })
}