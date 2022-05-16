import { auth } from "../server/firebase.js";
export default class Myinfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <input value="${
        !auth.currentUser.displayName
          ? auth.currentUser.email
          : auth.currentUser.displayName
      }"/>
      `;
  }
}
customElements.define("myinfo-container", Myinfo);
