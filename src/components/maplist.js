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
        `;
        this.querySelector('.arrow').onclick = e => this.parentElement.classList.remove('open');
    }
}
customElements.define('map-list', Maplist);