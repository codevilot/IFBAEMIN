export default class Store extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="maphead">
        <img class="arrow" src="./src/assets/svg/leftarrow.svg">
        
        <h3 class="title">
        서비스 전체보기
        </h3>
        <div class="blank">
        </div>
        </div>

        <ul class="menu__board">
        <li class="menu__item">
        돈까스·회·일식
        </li>
        <li class="menu__item">
        중식
        </li>
        <li class="menu__item">
        치킨
        </li>
        <li class="menu__item">
        백반·죽·국수
        </li>
        <li class="menu__item">
        카페·디저트
        </li>
        <li class="menu__item">
        분식
        </li>
        </ul>
        `
    }
}
customElements.define('store-list', Store);