import { auth } from "../server/firebase.js";
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
        ${!auth.currentUser ? "로그인해주세요" : auth.currentUser.email}
        </div>
        <img class="move" src="./src/assets/svg/rightarrow.svg">
        </div>
        <div class="childbox">
        </div>
        `;

    this.querySelector(".myprofile").onclick = (e) => {
      if (!auth.currentUser) {
        const childbox = this.querySelector(".childbox");
        childbox.innerHTML = `<login-container> </login-container>`;
        childbox.classList.add("open");
        // login in set
        const loginForm = childbox.querySelector("login-container");
        loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const errMsg = document.querySelector("#loginMsg");
          console.log(loginForm.querySelector("#login-email").value);
          const email = loginForm.querySelector("#login-email").value;
          const password = loginForm.querySelector("#login-password").value;
          auth
            .signInWithEmailAndPassword(email, password)
            .then((cred) => {
              location.replace("./index.html");
              console.log(auth.currentUser.email);
            })
            .catch((err) => {
              errMsg.innerHTML = err.message;
            });
        });
      } else {
        //my profile
        // this.querySelector('.childbox').innerHTML = ``
      }
    };
    this.querySelector(".arrow").onclick = (e) =>
      this.parentElement.classList.remove("open");
  }
}

customElements.define("mypage-wrap", Mypage);
