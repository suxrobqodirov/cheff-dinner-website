window.addEventListener(`DOMContentLoaded`, () => {
    window.addEventListener("load", function () {
        // page loader
        document.querySelector(".page-loader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".page-loader").style.display= "none"
        },600);
        // animation on scroll 
        AOS.init()
    })

    /* =============================== togle navbar ======================*/
    const navToggler = document.querySelector(".nav-toggler");
    navToggler.addEventListener('click', toggleNav);

    function toggleNav () {
        navToggler.classList.toggle("active");
        document.querySelector(".nav").classList.toggle("open");
        
    }

    // close nav when clicking on a navbar item
    document.addEventListener("click",function(event) {
        if(event.target.closest(".nav-item")) {
            toggleNav()
        }
    });

    // sticky header
    window.addEventListener("scroll", function() {
        if (this.pageYOffset > 60) {
            document.querySelector(`.header`).classList.add('sticky');
        } else {
            document.querySelector(`.header`).classList.remove('sticky');
        }
    })

    // menu tabs 
    const menuTabs = document.querySelector(".menu-tabs");
    menuTabs.addEventListener(`click`, function (e) {       //what is it 
        if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
                const target = e.target.getAttribute('data-target');
                menuTabs.querySelector('.active').classList.remove('active')
                e.target.classList.add('active');
                const menuSection = document.querySelector('.menu-section');
                menuSection.querySelector('.menu-tab-content.active').classList.remove('active')
                menuSection.querySelector(target).classList.add("active");
                // animation on scroll
                AOS.init()
            }
    })
})