(function () {
    const topMenu = document.querySelector('.topbar');
    const topMenuHeight = topMenu.offsetHeight;
    const topMenuLinks = document.querySelectorAll('.navigation > li > a');

    function setLinkAsActive(link) {
        const currentActiveLink = document.querySelector('.navigation > li > a.active');

        if (currentActiveLink) {
            currentActiveLink.classList.remove('active');
        }

        link.classList.add('active');
    }

    function goToSection(link) {
        setLinkAsActive(link);
        window.location.hash = link.getAttribute('href');
    }

    function animateNavigation() {
        topMenuLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToSection(e.target);
            });
        });
    }

    function getWindowTopOffset() {
        const windowTop = window.pageYOffset || document.documentElement.scrollTop;
        return windowTop - (document.documentElement.clientTop || 0);
    }

    function stickTopMenu() {
        window.addEventListener('scroll', function () {
            const topOffset = getWindowTopOffset() + 30;

            if (topOffset > topMenuHeight && !topMenu.classList.contains('fixed')) {
                topMenu.classList.add('fixed');
            } else if (topOffset < topMenuHeight && topMenu.classList.contains('fixed')) {
                topMenu.classList.remove('fixed');
            }
        });
    }

    animateNavigation();
    stickTopMenu();
})();