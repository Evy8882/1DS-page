let sections = document.querySelectorAll('.section');
sections.forEach(item => {
    item.style.visibility = 'hidden';
});
ScrollReveal().reveal(".section", {delay: 350})