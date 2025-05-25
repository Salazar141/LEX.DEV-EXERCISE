document.addEventListener('DOMContentLoaded', () => {
   
    const navToggle = document.querySelector('.top-navbar .nav-toggle');
    const navLinksUl = document.querySelector('.top-navbar .nav-links ul');

    if (navToggle && navLinksUl) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinksUl.classList.toggle('active');
        });

        document.querySelectorAll('.top-navbar .nav-links ul a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksUl.classList.contains('active')) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navLinksUl.classList.remove('active');
                }
            });
        });
    }

   
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('main section[id]'); 

    function changeBottomNavActiveState() {
        let currentSectionId = 'hero'; 
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        
        const topNavbar = document.querySelector('.top-navbar.sticky');
        const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;
        
        
        if (scrollPosition + windowHeight >= docHeight - 50) { 
            const lastSection = sections[sections.length -1];
            if(lastSection) currentSectionId = lastSection.id;

        } else {
             sections.forEach(section => {
                const sectionTop = section.offsetTop - topNavbarHeight - 70;
                if (scrollPosition >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });
        }


        bottomNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });

        const heroLink = document.querySelector('.bottom-nav-item[href="#hero"]');
        if (!document.querySelector('.bottom-nav-item.active') && heroLink) {
            heroLink.classList.add('active');
        }
    }
    
    if (bottomNavItems.length > 0 && sections.length > 0) {
        changeBottomNavActiveState();
        window.addEventListener('scroll', changeBottomNavActiveState);

        bottomNavItems.forEach(item => {
            item.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        
                        const topNavbar = document.querySelector('.top-navbar.sticky');
                        const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;
                        
                        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - topNavbarHeight - 10; // 10px buffer

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }


    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (!anchor.classList.contains('bottom-nav-item')) {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.startsWith('#') && document.querySelector(href)) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    const topNavbar = document.querySelector('.top-navbar.sticky');
                    const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;
                    
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - topNavbarHeight - 10; 

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    const topNavLinks = document.querySelectorAll('.top-navbar .nav-links ul li a');
    function changeTopNavLinkState() {
        let currentSectionId = 'hero';
        const topNavbar = document.querySelector('.top-navbar.sticky');
        const topNavbarHeight = (topNavbar && window.getComputedStyle(topNavbar).display !== 'none') ? topNavbar.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - topNavbarHeight - 50; // Buffer
            if (window.pageYOffset >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        topNavLinks.forEach((link) => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-link');
            }
        });
        
        if (window.pageYOffset < sections[0].offsetTop - topNavbarHeight - 50) {
            topNavLinks.forEach(a => a.classList.remove('active-link'));
            const homeLink = document.querySelector('.top-navbar .nav-links ul li a[href="#hero"]');
            if(homeLink) homeLink.classList.add('active-link');
        }
    }
    if (topNavLinks.length > 0 && sections.length > 0) {
        changeTopNavLinkState();
        window.addEventListener('scroll', changeTopNavLinkState);
    }


    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});