import { db } from "../server/firebase.js";
export default class Search extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
        <input class="search__store">
        <img class="temp" src="./src/assets/svg/leftarrow.svg">
        </div>
        <div class="stores__wrap">
        <div class="stores">
        </div>
        </div>
        `;
    this.querySelector(".arrow").onclick = (e) =>
      this.parentElement.classList.remove("open");
    this.querySelector(".temp").onclick = (e) => {
      const stores = this.querySelector(".stores");
      stores.innerHTML = ``;
      const keyword = this.querySelector("input").value;
      db.collection("store")
        .orderBy("name")
        .startAt(keyword)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc);

            const div = document.createElement("div");
            const img = `https://github.com/codevilot/IFBAEMIN/blob/main/src/assets/store/${
              doc.data().thumbnail || doc.data().name
            }?raw=true`;
            stores.appendChild(div);
            div.classList.add("store__box");
            div.innerHTML = `

            <img class="store__img" src=${img}>
                    <div class="store__info">
                    <div class="store__name">${doc.data().name}${
              doc.data().coupon ? `<span class="coupon">쿠폰</span>` : ""
            }</div> 
                    <div>⭐ ${
                      doc.data().score
                    } <span class="store__inner__menu">${
              doc.data().menu
            }</span></div>
                    ${
                      doc.data().least || doc.data().fee
                        ? `<div>${
                            doc.data().least
                              ? "최소주문" + doc.data().least
                              : ""
                          } ${
                            doc.data().fee ? ", 배달팁" + doc.data().fee : ""
                          } </div>`
                        : ""
                    }
                    <div class="store__time">🕒 ${doc.data().time}</div>
                    </div> 
                    `;
          });
        });
    };
  }
}
customElements.define("search-wrap", Search);
