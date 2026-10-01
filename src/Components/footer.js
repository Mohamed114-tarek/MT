class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <h3 class="footer">Created By Mohamed Tarek</h3>

    `;
  }
}
customElements.define("m-footer", Footer);
