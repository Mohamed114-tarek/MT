class Services extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <main class="services">
      <article class="main-head">
        <h1>Services</h1>
        <p>How Can I Help You</p>
      </article>
      <section class="services__container container">
        <article class="services__column">
          <article class="services__box">
            <i class="fa-solid fa-laptop-code services__box-icon"></i>
            <article class="services__box-text">
              <h3 class="services__box-text-head">Front-End </h3>
              <p class="services__box-text-desc">
                Building responsive, interactive websites with clean code and
                smooth user experiences.
              </p>
            </article>
          </article>
          <article class="services__box">
            <i class="fa-solid fa-paintbrush services__box-icon"></i>
            <article class="services__box-text">
              <h3 class="services__box-text-head">Graphic Design</h3>
              <p class="services__box-text-desc">
                Building responsive, interactive websites with clean code and
                smooth user experiences.
              </p>
            </article>
          </article>
        </article>
        <article class="services__column">
          <article class="services__box">
            <i class="fa-solid fa-user services__box-icon"></i>
            <article class="services__box-text">
              <h3 class="services__box-text-head">UI & UX</h3>
              <p class="services__box-text-desc">
                Designing clean, intuitive interfaces that balance usability,
                clarity, and visual appeal.
              </p>
            </article>
          </article>
          <article class="services__box">
            <i class="fa-solid fa-volume services__box-icon"></i>
            <article class="services__box-text">
              <h3 class="services__box-text-head">Brand Identity</h3>
              <p class="services__box-text-desc">
                Building cohesive visual identities through logos, typography,
                colors, and design systems.
              </p>
            </article>
          </article>
        </article>
        <img src="src/assets/undraw_contract_ynau.svg" class="services__img" alt="" />
      </section>
    </main>`;
  }
}
customElements.define("m-ser", Services);
