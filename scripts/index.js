document.addEventListener('DOMContentLoaded', function() {
    // Scroll click nav
    var balisesA = document.querySelectorAll('header nav a, #nav nav a');

    balisesA.forEach(function(baliseA) {
        baliseA.addEventListener('click', function(event) {
            event.preventDefault();

            var targetID = this.getAttribute('href');
            var targetElement = document.querySelector(targetID);

            if (targetElement){
                var pos = targetElement.offsetTop;
                window.scrollTo({
                    top: pos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle-nav
    var toggle_nav_overlay = document.querySelector('#toggle-nav .overlay');
    var toggle_nav = document.getElementById('toggle-nav');
    var nav = document.getElementById('nav');
    toggle_nav_overlay.addEventListener('click', function() {
        if (toggle_nav.classList.contains('up')){
            toggle_nav.classList.remove('up');
            toggle_nav.classList.add('down');
        } else if (toggle_nav.classList.contains('down')){
            toggle_nav.classList.remove('down');
            toggle_nav.classList.add('up');
        }

        var left = document.querySelector('#toggle-nav .arrow.left');
        var right = document.querySelector('#toggle-nav .arrow.right');

        if (left.classList.contains('up')){
            left.classList.remove('up');
            right.classList.remove('up');
            left.classList.add('down');
            right.classList.add('down');
        } else if (left.classList.contains('down')){
            left.classList.remove('down');
            right.classList.remove('down');
            left.classList.add('up');
            right.classList.add('up');
        }


        if (nav.classList.contains('hide')){
            nav.classList.add('show');
            nav.classList.remove('hide');
        } else if (nav.classList.contains('show')){
            nav.classList.add('hide');
            nav.classList.remove('show');
        }
    });

    // Fleche
    var fleche = document.getElementById('fleche');
    fleche.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        toggle_nav.classList.remove('active');
        toggle_nav.classList.remove('down');
        toggle_nav.classList.add('up');

        nav.classList.remove('show');
        nav.classList.add('hide');
    });

    // Window ScrollY
    document.addEventListener('scroll', function() {
        // Toggle-nav
        if ((window.screen.width <= 950 && window.scrollY > 200) || (window.screen.width > 950 && window.scrollY > 100)){
            // Toggle-nav
            toggle_nav.classList.add('active');

            // Fleche
            fleche.classList.add('active');
        } else {
            // Toggle-nav
            toggle_nav.classList.remove('active');
            toggle_nav.classList.add('up');
            toggle_nav.classList.remove('down');

            // Fleche
            fleche.classList.remove('active');

            // Nav
            nav.classList.remove('show');
            nav.classList.add('hide');
        }
    });
});