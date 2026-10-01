class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `   <header>
      <main class="header__container container">
        <img src="src/assets/logo.png" class="header__logo" alt="website Logo" />
        <nav>
          <ul class="header__link-list">
            <li class="header__link-item">
              <a href="#" class="header__link">Home</a>
            </li>
            <li class="header__link-item">
              <a href="#" class="header__link">About</a>
            </li>
            <li class="header__link-item">
              <a href="#" class="header__link">Services</a>
            </li>
            <li class="header__link-item">
              <a href="#" class="header__link">Projects</a>
            </li>
            <li class="header__link-item">
              <a href="#" class="header__link">Contact</a>
            </li>
          </ul>
        </nav>
        <article class="header__ctas">
          <button class="header__cta-main main-btn">Free Meeting</button>
          <select class="header__cta-lang ">
            <option value="English">EN</option>
            <option value="Arabic">AR</option>
          </select>
   
        </article>
      </main>
    </header>`;
  }
}
customElements.define("m-header", Header);
