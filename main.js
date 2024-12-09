window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    
    header.classList.toggle('rolagem', window.scrollY > 0);

});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("icone"); 
    const menu = document.getElementById("menu"); 

    
    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
    });


    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menu.contains(event.target); 
        const isClickOnIcon = menuIcon.contains(event.target); 
        if (!isClickInsideMenu && !isClickOnIcon) {
            menu.classList.remove("active");
        }
    });


    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});