
document.onreadystatechange = event => {
    var menuToggle = document.getElementById('menu-toggle');
    var sideMenu = document.getElementById('side-menu');
    console.log(document);
    menuToggle.onclick = event => {
        sideMenu.classList.toggle('active')
        sideMenu.classList.toggle('inactive')
    };
}