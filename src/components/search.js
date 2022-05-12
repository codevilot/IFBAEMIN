import { db } from "../server/firebase.js";
export default class Search extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
        <input class="search__store">
        <img class="temp" src="./src/assets/svg/leftarrow.svg">
        </div>
        `;
    this.querySelector(".arrow").onclick = (e) =>
      this.parentElement.classList.remove("open");
    this.querySelector(".temp").onclick = (e) => {
      const keyword = this.querySelector("input").value;
      db.collection("store")
        .orderBy("name")
        .startAt("스")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
          });
        });
    };
  }
}
customElements.define("search-wrap", Search);
