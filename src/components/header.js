import { auth } from "../server/firebase.js";
export default class Header extends HTMLElement {
  connectedCallback() {
    const modal = this.parentElement.parentElement.querySelector("modal-wrap");
    this.time = new Date();
    this.y = this.time.getFullYear();
    this.m1 =
      this.time.getMonth() === 12
        ? this.time.getMonth()
        : this.time.getMonth() + 1;
    this.d = this.time.getDate();
    this.h =
      this.time.getHours() <= 9
        ? "0" + this.time.getHours()
        : "" + this.time.getHours();
    this.m2 =
      this.time.getMinutes() <= 9
        ? "0" + this.time.getMinutes()
        : "" + this.time.getMinutes();
    this.addresscontainer = "classtoid" + this.parentElement.parentElement.id;
    this.class = "address" + this.parentElement.parentElement.id;
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
        <img class="allmap" src="./src/assets/svg/category.svg">
        <div class="category"> </div>
        <div class="address" id="${this.addresscontainer}" onclick="sample2_execDaumPostcode(${this.class}, ${this.addresscontainer})">서울 송파구 위례성대로 2, 장은빌딩 2층<img class="arrow" src="./src/assets/svg/arrow.svg"> </div>
        <img class="category blind" src="./src/assets/svg/bell.svg">
        <img class="login" src="./src/assets/svg/tongue.svg">
        </div>
        <div class="searchbox">
        <span class="searchspan">
        <img class="searchicon" src="./src/assets/svg/search.svg">
        찾아라! 맛있는 음식과 맛집
        </span>
        </div>  
        `;

    this.querySelector(".login").onclick = (e) => {
      const mypage = modal.querySelector(".my__page");
      mypage.innerHTML = `<mypage-wrap></mypage-wrap>`;
      const loginForm = modal.querySelector("login-container");
      mypage.classList.add("open");
    };

    this.querySelector(".allmap").onclick = (e) => {
      const mapcontainer = modal.querySelector(".map__container");
      mapcontainer.innerHTML = `<map-list></map-lsit>`;
      mapcontainer.classList.add("open");
    };

    this.querySelector(".searchbox").onclick = (e) => {
      const searchcontainer = modal.querySelector(".search__container");
      searchcontainer.innerHTML = `<search-wrap></search-wrap>`
      searchcontainer.classList.add("open");
    }
  }
}

customElements.define("header-wrap", Header);
