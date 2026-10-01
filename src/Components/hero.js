class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="hero">
      <article class="hero__img-background-effect">
        <img src="src/assets/hero.webp" alt="hero section background" class="hero__img-back" />
      </article>
      <section class="hero__container container">
     <article class="hero__flex">    <article class="hero__text-box">
          <h3 class="hero__text-box-head-sub">HI, I'm</h3>
          <h1 class="hero__text-box-head">Mohamed Tarek</h1>
          <h3 class="hero__text-box-head-sub-2">
            Front End <span class="hero__text-sub-2-gradient">&</span> Designer
          </h3>
          <p class="hero__text-box-text">
            I don’t just create a beautiful website <br /> or design I make brands
            that’s hook
          </p>
          <article class="hero__text-ctas">
            <button class="hero__cta-1 main-btn">See Work</button>
            <button class="hero__cta-2 sec-btn">See CV</button>
          </article>
        </article>
        <img
          src="src/assets/hero-2.svg"
          alt="illustration for the website"
          class="hero__illustrator"
        /></article>
        <article class="hero__stats-grid">
          <article class="hero__stats-box">
            <h2 class="hero__stats-box-head">Front-End</h2>
            <article class="hero__stats-box-container">
              <article class="hero__stats-box-container-box">
                <h3 class="hero__container-box-head">Experience</h3>
                <p class="hero__contaienr-box-num">
                +3 <span class="hero__container-box-num--small">Months</span>
                </p>
              </article>
              <article class="hero__stats-box-container-box">
                <h3 class="hero__container-box-head">Projects</h3>
                <p class="hero__contaienr-box-num">5</p>
              </article>
            </article>
          </article>
          <article class="hero__stats-box">
            <h2 class="hero__stats-box-head">Graphic Design</h2>
            <article class="hero__stats-box-container">
              <article class="hero__stats-box-container-box">
                <h3 class="hero__container-box-head">Experience</h3>
                <p class="hero__contaienr-box-num">
                +3 <span class="hero__container-box-num--small">Months</span>
                </p>
              </article>
              <article class="hero__stats-box-container-box">
                <h3 class="hero__container-box-head">Projects</h3>
                <p class="hero__contaienr-box-num">6</p>
              </article>
            </article>
          </article>
        </article>
      </section>
    </main>`;
  }
}
customElements.define("m-hero", Hero);
