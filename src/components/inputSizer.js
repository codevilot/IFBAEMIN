export default class InputSizer extends HTMLElement {
    constructor() {
        super();
        this.height = "500";
        this.width = "500";
    }
    connectedCallback() {
        this.innerHTML = `
        <span>
        Width : 
        </span>
        <input value=${this.height} class="width"/>
        <span>
        Height : 
        </span>
        <input value=${this.width} class="height"/>        
        `
    }
    
}

customElements.define('input-sizer', InputSizer);