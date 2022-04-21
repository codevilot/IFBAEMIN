export default class Maplist extends HTMLElement {
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
        <div class="delivery">
        <ul class="delivery__list">
        <li class="seleted delivery__item">
            배달
        </li>
        <li class="delivery__item">
            포장
        </li>
        </ul>
        </div>
        <div class="category">
        <ul class="menu__board">
        <li class="menu__item">
        돈까스 회 일식
        </li>
        <li class="menu__item">
        중식
        </li>
        <li class="menu__item">
        치킨
        </li>
        <li class="menu__item">
        백반 죽 국수
        </li>
        <li class="menu__item">
        카페 디저트
        </li>
        <li class="menu__item">
        분식
        </li>
        <li class="menu__item">
        찜 탕 찌개
        </li>
        </ul>
        </div>
        `;
        this.querySelector('.arrow').onclick = e => this.parentElement.classList.remove('open');
    }
}
customElements.define('map-list', Maplist);