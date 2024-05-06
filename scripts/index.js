document.addEventListener('DOMContentLoaded', function() {
    // Scroll
    var balisesA = document.querySelectorAll('header nav a');

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

    // Fleche
    var fleche = document.getElementById('fleche');
    fleche.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.addEventListener('scroll', function() {
        if (window.scrollY > 100){
            fleche.classList.add('active');
        } else {
            fleche.classList.remove('active');
        }
    });
});