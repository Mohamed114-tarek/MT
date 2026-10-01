class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <main class="contact">
          <article class="main-head">
        <h1>Contact</h1>
        <p>My Contact Info</p>
      </article>
      <section class="contact__container container">
        <article class="contact__text">
          <h1 class="contact__text-head">Get In <span class="contact__text-head--gradient"> Touch </span></h1>
          <p class="contact__text-des">
            Have a project in mind or an idea you'd like to bring to life? Let’s
            connect and turn it into something meaningful.
          </p>
        </article>
        <article class="contact__info">
          <article class="contact__info-box">
            <i class="fa-regular fa-envelope contact__info-box-icon"></i>
            <a href="#" class="contact__info-box-text"> mohamedelawady2023@gmail.com </a>
          </article>
          <article class="contact__info-box">
            <i class="fa-solid fa-phone contact__info-box-icon"></i>
            <a href="#" class="contact__info-box-text"> +20 10226 41437 </a>
          </article>
        </article>
   
      </section>
    </main>`;
  }
}
customElements.define("m-con", Contact);
