import { auth, db } from "../server/firebase.js"
export default class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/x.svg">
        </div>
        <div class="loginform">
        <form id="login-form">
            <input placeholder="이메일 주소" type="email" id="login-email" class="validate" required />
            <label for="login-email" hidden>address</label>
            <input placeholder="비밀번호" type="password" id="login-password" class="validate" autocomplete="off" required />
            <label for="login-password" hidden>password</label>
        <button class="login-sumit">로그인</button>
        </form>
        <div class="tosign">
        <span>
        가입을 안하셨나요?
        </span>
        <span class="loginanchor">
        회원가입
        </span>
        </div>
        </div>
        <!-- sign up-->
        <div class="signform off">
        <form id="signup-form">
        <input placeholder="닉네임" id="first_name" type="text" class="validate" pattern="[A-Za-z]{3,}" title="Please Enter Correct First Name (No special characters allowed)"
        required />
        <label for="first_name" hidden></label>
        <input placeholder="이메일 주소" type="email" id="signup-email" class="validate" required />
        <label for="signup-email" hidden></label>
        <input placeholder="비밀번호" type="password" id="signup-password" class="validate" autocomplete="off" required />
        <label for="signup-password" hidden></label>
        <button class="sign-sumit">Sign up</button>
        </form>
        <div class="tologin">
        <span>
        아이디가 있으신가요?
        </span>
        <span class="signanchor">
        로그인
        </span>
        </div>
        
        </div>
        `;
        this.querySelector('.arrow').onclick = e => this.parentElement.classList.remove('open');
        this.querySelector('.loginanchor').onclick = e =>{ this.querySelector('.loginform').classList.add('off');
                                                           this.querySelector('.signform').classList.remove('off')};
        this.querySelector('.signanchor').onclick = e =>{ this.querySelector('.loginform').classList.remove('off');
                                                          this.querySelector('.signform').classList.add('off')};
    }
}

customElements.define('login-container', Login);