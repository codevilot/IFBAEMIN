import Login from "./login.js";


export default class Container extends HTMLElement {
    constructor() {
        super();
        // console.log(auth)
    }
    connectedCallback() {

        this.innerHTML = `
        <div class="mobile notes20"> </div>
        <header-wrap>

        </header-wrap>
        <login-container> </login-container>
        `
    }

}


customElements.define('container-wrap', Container);