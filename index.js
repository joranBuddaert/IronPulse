

var wrapper2 = document.querySelectorAll('.wrapper2');
var btn = document.querySelector('.btn');
var currentimg = 4;

btn.addEventListener('click',
    function () {
        for(var i = currentimg; i < currentimg + 4 ; i++){
            if(wrapper2[i]){
                wrapper2[i].style.display = 'block';
            }
        }
        currentimg += 4;
        if (currentimg >= wrapper2.length){
            event.target.style.display = 'none';
        }
    });

// Voeg een script toe om de functionaliteit toe te voegen
document.addEventListener('DOMContentLoaded', function() {
    // Zoek alle link-elementen
    var showDivLinks = document.querySelectorAll('.showDiv');

    // Voeg een klikgebeurtenisluisteraar toe aan elk link-element
    showDivLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Voorkom de standaardgedrag van de link (navigeren naar een andere pagina)
            event.preventDefault();

            // Zoek de bijbehorende verborgen div op basis van het data-div attribuut
            var divId = link.getAttribute('data-div');
            var hiddenDiv = document.getElementById(divId);

            // Controleer de huidige zichtbaarheidsstatus
            var isVisible = !hiddenDiv.classList.contains('hidden');

            // Verberg eerst alle divs
            document.querySelectorAll('.flex-container').forEach(function(div) {
                div.classList.add('hidden');
            });

            // Toon de geselecteerde div alleen als deze niet zichtbaar was, anders verberg het
            if (!isVisible) {
                hiddenDiv.classList.remove('hidden');
            }
        });
    });
});

