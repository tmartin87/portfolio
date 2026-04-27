const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const navlis = document.querySelectorAll("#nav-menu li");
const mainTitle = document.querySelector("#main-title");

menuButton.addEventListener("click", () => {
    navMenu.classList.remove("hidden", "animate-slide-out");
    navMenu.classList.add("flex", "animate-slide-in");

});

navlis.forEach((liElement) => {
    liElement.addEventListener("click", () => { 
        if (window.innerWidth >= 640) return;
        navMenu.classList.add("animate-slide-out");
        navMenu.classList.remove("animate-slide-in");
        setTimeout(() => {
            navMenu.classList.add("hidden");
        }, 500);
          
});
})

navMenu.addEventListener("animationend", (event) => {
    if  (event.animationName !== "slide-out")return; 
        navMenu.classList.add("hidden");
        navMenu.classList.remove("flex");
   });


   window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) {
        navMenu.classList.remove("hidden", "animate-slide-out", "animate-slide-in");
        navMenu.classList.add("flex");
    }
   })
    

   mainTitle.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
   })
