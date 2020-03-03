const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLi = document.querySelectorAll('.nav-links li');
    const navLinks = document.querySelectorAll('.navbar a');
    const navbar = document.querySelector('.nav-background');

    /* Dogadjaji pri kliku na hamburger meni */
    burger.addEventListener('click', () => {
        /* Otvaranje i zatvaranje*/
        nav.classList.toggle('nav-active');
        navbar.classList.toggle('navbar-active');
        /* Restartovanje animacije i podesavanje duzine animacije pri otvaranju */
        navLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        /* Promena pozadine oko ikonice */
        burger.classList.toggle('burger-active');
        /* Transformacija ikonice*/
        burger.classList.toggle('toggle');
    });

    /* Zatvaranje hamburger menija pri kliku na link */
    navLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

    function navbarLinkClick() {
        if (nav.classList.contains("nav-active")) {
            burger.click();
        }
    }

}

navSlide();


/*const tx = document.getElementsByTagName('textarea');
const txc = document.getElementById("textarea-control");
for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}*/

//  $( document ).ready(function() {
//      $(".container").mouseenter(function(){
//         $(this).find(".overlay").addClass("overlay-active");
//      });
//      $(".container").mouseleave(function(){
//         $(this).find(".overlay").removeClass("overlay-active");
//      });
//  });

