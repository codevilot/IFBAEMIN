import Login from "./login.js";


export default class Container extends HTMLElement {
    constructor() {
        super();
        // console.log(auth)
    }
    connectedCallback() {

        this.innerHTML = `
        <login-container> </login-container>
        `
    }

}


customElements.define('container-wrap', Container);