const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    //console.log(links.classList);
    //console.log(links.classList.contains(""));
    links.classList.toggle("show-links");
});

