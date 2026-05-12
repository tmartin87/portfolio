import { projects, reviews } from "./data.js";

const templateProject = document.querySelector(
    '[data-template="project-card"]');

const projectsUL = document.querySelector("#projects ul");

projects.forEach((project) => {
    const card = templateProject.content.cloneNode(true);
    const title = card.querySelector("h4");
    const image = card.querySelector("img");
    const description = card.querySelector("p");
    const tech = card.querySelector(".tech");
    const link = card.querySelector(".github-link");
    const appLink = card.querySelector(".app-link");

     

    image.src = project.image.src;
    image.alt = project.image.alt;

    title.textContent = project.title;
    description.textContent = project.description;

    tech.textContent = project.tech;
    link.href = project.link;
    appLink.href = project.appLink;

    projectsUL.appendChild(card);
    
    

})

const templateReview = document.querySelector(
    '[data-template="review-card"]');

const reviewsUl = document.querySelector("#reviews ul");

reviews.forEach((review) => {
    const card = templateReview.content.cloneNode(true);
    const image = card.querySelector("img");
    const name = card.querySelector("p");
    const comment = card.querySelector("blockquote");

    image.src = review.image.src;
    image.alt = review.image.alt;

    name.textContent = review.name;
    comment.textContent = review.comment;

    reviewsUl.appendChild(card);
})
