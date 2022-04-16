import Slide from './slide.js'
import Footer from "./footer.js"
export default class Body extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu">
        <div class ="flex1 flexbox delivery">   
        <div class="title">
        배달
        </div>
        <div class="subtitle">
        세상은 넓고<br>
        맛집은 많다
        </div>
        <div class="blank">
        </div>
        </div>
        <div class ="flex1 flexbox delivery1">   
        <div class="title">
        배민1
        </div>
        <div class="subtitle">
        한 번에 한 집만<br>
        빠르게 배달해요!
        </div>
        <div class="blank">
        </div>
        </div>
        <div class ="flex2 flexbox pickup">   
        <div class="title">
        포장
        </div>
        <div class="subtitle">
        가까운 가게는 직접 가지러 가지요
        </div>
        </div>
        <div class ="flex1 flexbox bmart">   
        <div class="title">
        B마트
        </div>
        <div class="subtitle">
        장보기도<br>
        즉시배달
        </div>

        </div>
        <div class ="flex1 flexbox convi">   
        <div class="title">
        간편식
        </div>
        <div class="subtitle">
        뚝딱 만드는<br>
        근사한 한끼
        </div>
        </div>
        </div>
        <div class="slide">
        <div class="slide__head">
        <h2>
        우리 동네 빠른 배달
        <img class="h2" src="./src/assets/svg/house.svg">
        <span class="circle">
        ?
        </span>
        </h2>
        </div>
        
        <slide-container>
        </slide-container>
        </div>
        </div>
        
        <footer-wrap>
        </footer-wrap>
        `
    }
}

customElements.define('body-wrap', Body);