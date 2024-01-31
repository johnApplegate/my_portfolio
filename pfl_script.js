
document.addEventListener('DOMContentLoaded', function () {
    var greyTitles = document.querySelectorAll('.greyTitle');

    function addSlideInClass() {
        greyTitles.forEach(function (element) {
            element.classList.add('slide-in');
        });
    }

    setTimeout(addSlideInClass, 1000);
});



const boxes = document.querySelectorAll('.project_content');

window.addEventListener('scroll', checkBoxes); 

checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });


