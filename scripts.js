

function ToggleTheme() {
    var body = document.querySelector('body');
    var theme = document.getElementById("theme");
    var logo = document.getElementById("logo");
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        theme.classList.remove('fa-sun');
        theme.classList.add('fa-moon');
        logo.src = 'img/logo-light.png';
    } else {
        body.classList.add('night');
        theme.classList.remove('fa-moon');
        theme.classList.add('fa-sun');
        logo.src = 'img/logo-night.png'; 
        }
}
