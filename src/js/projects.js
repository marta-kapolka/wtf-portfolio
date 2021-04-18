fetch("https://api.github.com/users/marta-kapolka/repos")
  .then((response) => response.json())
  .then((data) => {
    data.reverse();
    const projectContainer = document.querySelector(".projects--js");
    for (let i = 0; i < data.length; i++) {
      const projectTemplate = `<article class="project">
  <svg
    class="project--icon"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use href="#github-icon-white" />
  </svg>
  <h3 class="project--description">
    <span class="project--label">project:</span
    ><span class="project--title">${data[i].name}</span>
  </h3>
  <p class="project--description">
    <span class="project--label">description:</span
    ><span class="project--details"
      >${data[i].description}</span
    >
  </p>
  <br />
  <p class="project--description">
    <span class="project--label">demo:</span
    ><a href="${data[i].homepage}" class="project--link">see here</a>
  </p>
  <p class="project--description">
    <span class="project--label">github:</span
    ><a href="${data[i].html_url}" class="project--link">source code</a>
  </p>
  </article>`;
      projectContainer.innerHTML += projectTemplate;
    }
  })
  .catch((e) => console.log(e));
