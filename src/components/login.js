export default class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
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
    }
}

customElements.define('login-container', Login);