export default class Maplist extends HTMLElement{
    connectedCallback() {

        this.innerHTML = `
        지도지도지도
        `
    }
}
customElements.define('map-list', Maplist);