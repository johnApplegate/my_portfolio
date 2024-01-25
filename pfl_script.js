// script.js
document.addEventListener('DOMContentLoaded', function () {
    var greyTitles = document.querySelectorAll('.greyTitle');

    function addSlideInClass() {
        greyTitles.forEach(function (element) {
            element.classList.add('slide-in');
        });
    }

    setTimeout(addSlideInClass, 1000);
});

