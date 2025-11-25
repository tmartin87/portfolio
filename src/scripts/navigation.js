const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
    console.log(navMenu);
    navMenu.classList.remove("hidden");
    navMenu.classList.add("flex", "animate-slide-in");

});