export default class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="statusbar">
        etc icon
        </div>
        <div class="shortcut"> 
        <img class="category" src="./src/assets/svg/category.svg">
        <img class="category" src="./src/assets/svg/category.svg">
        <div class="address"> 노원구 수락산로 12  </div>
        <img class="category" src="./src/assets/svg/category.svg">
        <img class="category" src="./src/assets/svg/category.svg">
        </div>
        <a>
        <div class="searchbox">
        <span>
        찾아라! 맛있는 음식과 맛집
        </span>
        </div>
        </a>
        `
    }
}

customElements.define('header-wrap', Header);