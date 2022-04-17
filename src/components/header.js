export default class Header extends HTMLElement {

    connectedCallback() {
        this.time = new Date();
        this.y = this.time.getFullYear();
        this.m1 = this.time.getMonth() ===12 ? this.time.getMonth():this.time.getMonth()+1 ;
        this.d = this.time.getDate();
        this.h = this.time.getHours() <=9? '0'+this.time.getHours():''+this.time.getHours();
        this.m2 = this.time.getMinutes() <= 9 ? '0' + this.time.getMinutes() : '' + this.time.getMinutes();
        this.addresscontainer = 'classtoid' +this.parentElement.parentElement.className;
        this.class = "address"+this.parentElement.parentElement.className;
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
        <div class="address" id="${this.addresscontainer}" onclick="sample2_execDaumPostcode(${this.class})">서울 송파구 위례성대로 2, 장은빌딩 2층<img class="arrow" src="./src/assets/svg/arrow.svg"> </div>
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