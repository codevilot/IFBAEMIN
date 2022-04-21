import { auth, db } from "../server/firebase.js"
export default class Mypage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
        
        <h3 class="title">
        My배민
        </h3>
        <div class="blank">
        </div>
        </div>
        <div class="info">
        <div class="up">오호 이런 기능이!</div>
        <div class="down">배민 잘 쓰는법 <br> 알려드려요</div>
        </div>
        <div class="myprofile">
        <img class="profile" src="./src/assets/svg/profile.svg">
        <div class="profile__id">
        ${!auth.currentUser ? '로그인해주세요' : auth.currentUser.email}
        </div>
        <img class="move" src="./src/assets/svg/rightarrow.svg">
        </div>

        `;
        this.querySelector('.arrow').onclick = e => this.parentElement.classList.remove('open');
    }
}

customElements.define('mypage-wrap', Mypage);