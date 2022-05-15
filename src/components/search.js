import { globalState, observable } from "../server/observer.js";
import { db } from "../server/firebase.js";
import { createObserver } from "./oi.js";
import debounce from "./debounce.js";
export default class Search extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
        <input class="search__store">
        </div>
        <div class="stores__wrap">
        <div class="stores">
        </div>
        </div>
        <div class="oi preload">
        </div>
        `;
    const oi = this.querySelector(".oi");
    const cont = this.querySelector("search-wrap");
    const preload = this.querySelector(".preload");
    const stores = this.querySelector(".stores");
    this.querySelector(".arrow").onclick = (e) =>
      this.parentElement.classList.remove("open");
    this.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        stores.innerHTML = `
      `;
        listAdd();
        objCont;
        preload.classList.remove("preload");
      }
    });

    const listAdd = () => {
      const keyword = this.querySelector("input").value;
      db.collection("store")
        .orderBy("name")
        .startAt(keyword)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
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
    const objCont = (cont, oi) => {
      createObserver(cont, oi);
    };
    observable.subscribe(debounce(listAdd));
  }
}
customElements.define("search-wrap", Search);
