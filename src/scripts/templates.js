import { projects } from "./data.js";

const templateProject = document.querySelector(
    '[data-template="project-card"]');

const projectsUL = document.querySelector("#projects ul");

projects.forEach((project) => {
    const card = templateProject.content.cloneNode(true);
    const title = card.querySelector("h4");
    const image = card.querySelector("img");
    const description = card.querySelector("p");
    const tech = card.querySelector(".tech");
    const link = card.querySelector("a");

     console.log({ title, image, description, tech, link });

    image.src = project.image.src;
    image.alt = project.image.alt;

    title.textContent = project.title;
    description.textContent = project.description;

    tech.textContent = project.tech;
    link.href = project.link;

    projectsUL.appendChild(card);
    

})