class Projects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="projects">
      <article class="main-head">
        <h1>Projects</h1>
        <p>Show Cases</p>
      </article>
      <section class="projects__container container">
        <article class="projects__card">
          <article class="projects__card-img-container">
            <img
              src="src/assets/work-1.jpg"
              class="projects__card-img"
              alt="project image"
            />
          </article>
          <article class="projects__card-text">
            <h3 class="project__card-text-head">Hummer</h3>
            <p class="projects__card-text-body">
              Graphic Design <br />
              Photoshop
            </p>
            <button class="main-btn projects__card-text-cta">See Work</button>
          </article>
        </article>
        <article class="projects__card">
          <article class="projects__card-img-container">
            <img
              src="src/assets/work-2.png"
              class="projects__card-img"
              alt="project image"
            />
          </article>
          <article class="projects__card-text">
            <h3 class="project__card-text-head">Modus</h3>
            <p class="projects__card-text-body">
              Front-End Development <br />
              HTML, CSS, JS
            </p>
            <button class="main-btn projects__card-text-cta">See Work</button>
          </article>
        </article>
        <article class="projects__card">
          <article class="projects__card-img-container">
            <img
              src="src/assets/work-3.jpg"
              class="projects__card-img"
              alt="project image"
            />
          </article>
          <article class="projects__card-text">
            <h3 class="project__card-text-head">Dr. Mohamed Elmahdy</h3>
            <p class="projects__card-text-body">
              Graphic Design <br />
              Photoshop
            </p>
            <button class="main-btn projects__card-text-cta">See Work</button>
          </article>
        </article>
        <article class="projects__card">
          <article class="projects__card-img-container">
            <img
              src="src/assets/work-4.png"
              class="projects__card-img"
              alt="project image"
            />
          </article>
          <article class="projects__card-text">
            <h3 class="project__card-text-head">Eng. Tarek</h3>
            <p class="projects__card-text-body">
              Front-End Development <br />
              HTML, CSS, JS
            </p>
            <button class="main-btn projects__card-text-cta">See Work</button>
          </article>
        </article>
      </section>
      <article class="projects__ctas">
        <button class="main-btn projects__ctas-main">Front-End Work</button>
        <button class="sec-btn projects__ctas-sec">Graphic Design Work</button>
      </article>
    </main>`;
  }
}
customElements.define("m-pro", Projects);
