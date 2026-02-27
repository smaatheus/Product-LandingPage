const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
        target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
            });
        }
    });
});