import { globalState, observable } from "../server/observer.js";
import { db } from "../server/firebase.js";
import { createObserver } from "./oi.js";
export default class Store extends HTMLElement {
  connectedCallback() {
    // observable.subscribe(globalState.category);

    this.innerHTML = `
        <div class="maphead">
        <img class="arrow" src="./src/assets/svg/leftarrow.svg">
        
        <h3 class="title">
        ${globalState.category}
        </h3>
        <div class="blank">
        </div>
        </div>
        <ul class="menu__board">
        <li class="sushi menu__item">
        돈까스·회·일식
        </li>
        <li class="china menu__item">
        중식
        </li>
        <li class="menu__item">
        치킨
        </li>
        <li class="menu__item">
        백반·죽·국수
        </li>
        <li class="menu__item">
        카페·디저트
        </li>
        <li class="menu__item">
        분식
        </li>
        </ul>
        <div class="stores__wrap">
        <div class="stores">
        </div>
        <div class="oi preload">
        </div>
        `;
    const oi = this.querySelector(".oi");
    const cont = this.querySelector("store-list");
    const preload = this.querySelector(".preload");
    this.limit = 0;
    this.querySelector(".menu__board").onclick = (e) => {
      globalState.category = e.target.classList[0];
      this.querySelector(".title").innerHTML = globalState.category;
      //   listMake();
    };
    const listAdd = () => {
      db.collection("store")
        .where("category", "==", globalState.category)
        .orderBy("s")
        .startAt(this.limit)
        .limit(5)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc)
            const stores = this.querySelector(".stores");
            const div = document.createElement("div");
            stores.appendChild(div);
            div.classList.add("store__box");
            div.innerHTML = `<img class="store__img" src="https://github.com/codevilot/IFBAEMIN/blob/main/src/assets/store/${
              doc.data().thumbnail
            }?raw=true"> 
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
      this.limit += 5;
    };

    // const listMake = () => {
    //   const stores = this.querySelector(".stores");

    //   if (globalState.page === 0) {
    //     stores.innerHTML = ``;
    //   }

    //   globalState.page = listAdd(globalState.page);
    // };
    const objCont = (cont, oi) => {
      preload.classList.remove("preload");
      createObserver(cont, oi);
    };
    // this.querySelector(".arrow").onclick = (e) => {
    //   listAdd(globalState.page);
    // };
    window.addEventListener("load", objCont);
    window.onload = window.addEventListener("load", objCont(cont, oi));
    observable.subscribe(listAdd);
  }
}
customElements.define("store-list", Store);
