import { auth, db } from "../server/firebase.js"
export default class Login extends HTMLElement {
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
        <form id="login-form">
        <div class="input-field">
            <input type="email" id="login-email" class="validate" required />
            <label for="login-email">Email address</label>
        </div>
        <div class="input-field">
            <input type="password" id="login-password" class="validate" autocomplete="off" required />
            <label for="login-password">Your password</label>
        </div>
        <div id="loginMsg" style="color: crimson; margin: 10px 0px;"></div>
        <button class="btn brown darken-2 z-depth-0">Login</button>
        </form>
        <div>
        <span>
        가입을 안하셨나요?
        </span>
        <a href="">
        가입하기
        </a>
        </div>
        `;
        this.querySelector('.remove').onclick = e => this.classList.toggle('closed');
    }
}

customElements.define('login-container', Login);