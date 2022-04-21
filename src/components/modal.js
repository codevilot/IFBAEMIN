import Login from "./login.js";
import Maplist from "./maplist.js";
import Mypage from "./mypage.js";
export default class Modal extends HTMLElement {
    connectedCallback() {
        this.class = 'address' + this.parentElement.id;
        this.classtoid = 'classtoid' + this.parentElement.id;
        this.innerHTML = `
            <div class="${this.classtoid}" style="height:0%">
            <div id="${this.class}" style="z-index:1;-webkit-overflow-scrolling:touch;">
            </div>
            </div>
            <div class="map__container">
            </div>
            <div class="my__page">
            </div>
        `
    }

}

customElements.define('modal-wrap', Modal);