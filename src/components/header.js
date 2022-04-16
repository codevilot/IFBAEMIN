export default class Header extends HTMLElement {

    connectedCallback() {
        this.time = new Date();
        this.y = this.time.getFullYear();
        this.m1 = this.time.getMonth();
        this.d = this.time.getDay();
        this.h = this.time.getHours();
        this.m2 = this.time.getMinutes() <= 9 ? '0' + this.time.getMinutes() : '' + this.time.getMinutes();

        this.innerHTML = `

        <div class="statusbar">
        <span class="time">
        ${this.h}:${this.m2}
         </span>
        <span class="date">
        ${this.y}.${this.m1}.${this.d}
        </span>
        </div>
        <div class="shortcut"> 
        <img class="category" src="./src/assets/svg/category.svg">
        <div class="category"> </div>
        <div class="address"> 노원구 수락산로 12         <img class="arrow" src="./src/assets/svg/arrow.svg"> </div>
        <img class="category" src="./src/assets/svg/bell.svg">
        <img class="category" src="./src/assets/svg/tongue.svg">
        </div>
        <a>
        <div class="searchbox">
        <span class="searchspan">
        <img class="searchicon" src="./src/assets/svg/search.svg">
        찾아라! 맛있는 음식과 맛집
        </span>
        </div>
        </a>
        `
    }
}

customElements.define('header-wrap', Header);