import Login from "./login.js";
import Maplist from "./maplist.js";
import Mypage from "./mypage.js";
import Store from "./storelist.js"
export default class Modal extends HTMLElement {
    connectedCallback() {
        this.class = 'address' + this.parentElement.id;
        this.classtoid = 'classtoid' + this.parentElement.id;
        this.innerHTML = `
            <div class="${this.classtoid}" style="height:0%">
            <div id="${this.class}" style="-webkit-overflow-scrolling:touch;">
            </div>
            </div>
            <div class="map__container">
            </div>
            <div class="my__page">
            </div>
            <div class="store__list">
            </div>
        `
    }

}

customElements.define('modal-wrap', Modal);