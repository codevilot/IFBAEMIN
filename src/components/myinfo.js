import { globalState } from "../server/observer.js";
import { auth } from "../server/firebase.js";
export default class Myinfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="maphead">
      <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
      <h3 class="title">
      내 정보 수정
      </h3>
      <div class="update">
      저장
      </div>
      </div>
      <input value="${
        !auth.currentUser.displayName
          ? auth.currentUser.email
          : auth.currentUser.displayName
      }" class="nameInput"/>
    
      `;

    this.querySelector(".update").onclick = (e) => {
      this.displayName = this.querySelector(".nameInput").value;
      auth.currentUser
        .updateProfile({
          displayName: this.displayName,
        })
        .then(() => {
          globalState.nickname = this.displayName;
        });
      this.parentElement.classList.remove("open");
    };

    this.querySelector(".arrow").onclick = (e) =>
      this.parentElement.classList.remove("open");
  }
}
customElements.define("myinfo-container", Myinfo);
