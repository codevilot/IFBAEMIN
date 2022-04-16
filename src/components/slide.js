export default class Slide extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="item1 item">
        <div class="thumbnail">
        </div>
        <div class="content">
        <div class="content__head">
        <h3>엄지 냉면 </h3>
        <img class="star" src="./src/assets/svg/star.svg">
        <span class="score">4.9</span>
        </div>
        <div class="fee"><span class="name">배달팁 </span> <span class="price">3000원</span></div>
        </div>
        </div>

        <div class="item2 item">
        <div class="thumbnail">
        </div>
        <div class="content">
        <div class="content__head">
        <h3>엄지 냉면 </h3>
        <img class="star" src="./src/assets/svg/star.svg">
        <span class="score">4.9</span>
        </div>
        <div class="fee"><span class="name">배달팁 </span> <span class="price">3000원</span></div>
        </div>
        </div>

        <div class="item1 item">
        <div class="thumbnail">
        </div>
        <div class="content">
        <div class="content__head">
        <h3>엄지 냉면 </h3>
        <img class="star" src="./src/assets/svg/star.svg">
        <span class="score">4.9</span>
        </div>
        <div class="fee"><span class="name">배달팁 </span> <span class="price">3000원</span></div>
        </div>
        </div>        
        `
    }
}
customElements.define('slide-container', Slide);