import Login from "./login.js";

export default class Modal extends HTMLElement {
    connectedCallback() {
        this.class = 'address' + this.parentElement.className;
        this.classtoid = 'classtoid' + this.parentElement.className;
        this.innerHTML = `
            <div class="${this.classtoid}" style="height:0%">
            <div id="${this.class}" style="z-index:1;-webkit-overflow-scrolling:touch;">
            </div>
            </div>
            <login-container class="closed"> </login-container>
        `
    }

}

customElements.define('modal-wrap', Modal);