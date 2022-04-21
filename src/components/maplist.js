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
        <img class="food" src="./src/assets/svg/sushi.svg">
        돈까스·회·일식
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        중식
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        치킨
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        백반·죽·국수
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        카페·디저트
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        분식
        </li>
        <li class="menu__item">
        <img class="food" src="./src/assets/svg/sushi.svg">
        찜·탕·찌개
        </li>
        </ul>
        </div>
        <div class="home">
        <a class="acti" href="./index.html">
        배달홈으로 가기
        </a>
        </div>
        `;
        this.querySelector('.arrow').onclick = e => this.parentElement.classList.remove('open');
    }
}
customElements.define('map-list', Maplist);