
export default class Container extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
        <header-wrap>
        </header-wrap>
        <body-wrap>
        </body-wrap>
        `
    }

}


customElements.define('container-wrap', Container);