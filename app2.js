
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
    linksContainer.style.height = 0;
    }
})

const navBar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav");
    }
    else {
        navBar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 400){
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
})

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.add("fixed-nav");

        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight
        }

       if(navHeight > 60.8){
           position = position + containerHeight;
       }

        window.scrollTo({
            top: position,
            left: 0
        })

        linksContainer.style.height = 0;
    })
})