const allLinks = document.querySelectorAll('.js-nav-link');

allLinks.forEach(link => {
    link.addEventListener('click', function() {
        allLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});
