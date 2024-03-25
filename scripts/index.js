document.addEventListener('DOMContentLoaded', function() {
    // Scroll
    var balisesA = document.querySelectorAll('header div a');

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
});