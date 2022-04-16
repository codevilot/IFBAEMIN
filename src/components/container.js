import Login from "./login.js";


export default class Container extends HTMLElement {
    constructor() {
        super();
        // console.log(auth)
    }
    connectedCallback() {

        this.innerHTML = `
        <header-wrap>

        </header-wrap>
        <login-container> </login-container>
        <body-wrap>
        </body-wrap>
        `
    }

}


customElements.define('container-wrap', Container);