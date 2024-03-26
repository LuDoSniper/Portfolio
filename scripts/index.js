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

    // Projets
    var projets = document.querySelectorAll('#projets .projet');

    projets.forEach(function(projet) {
        projet.addEventListener('click', function() {
            if (projet.id === "chomp"){
                var location = "../ressources/CHOMP_JML.zip";
            } else if (projet.id === "dungeon_crawler"){
                var location = "../ressources/Dongeon_Crawler - 0.2.0.2.zip";
            } else if (projet.id === "ludine_games"){
                var location = "https://lucien.donnarieix.fr/origine/ludine_games";
            } else if (projet.id === "haggerim"){
                var location = "https://haggerim.donnarieix.fr";
            }
            window.location.href = location;
        });
    });
});