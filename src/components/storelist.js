import { db } from "../server/firebase.js"
export default class Store extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="maphead">
        <img class="arrow" src="./src/assets/svg/leftarrow.svg">
        
        <h3 class="title">
        서비스 전체보기
        </h3>
        <div class="blank">
        </div>
        </div>

        <ul class="menu__board">
        <li class="menu__item">
        돈까스·회·일식
        </li>
        <li class="menu__item">
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
        <div class="stores">
        </div>
        `
        const list = db.collection("store").where("category", "==", "don").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const div = document.createElement('div');
                this.querySelector('.stores').appendChild(div)
                div.classList.add('store__box')
                div.innerHTML = `<img class="store__img" src="https://picsum.photos/200"> 
                <div class="store__info">
                <div class="store__name">${doc.data().name}${doc.data().coupon ? `<span class="coupon">쿠폰</span>` : ""}</div> 
                <div>⭐ ${doc.data().score} <span class="store__inner__menu">${doc.data().menu}</span></div>
                ${doc.data().least || doc.data().fee ? (`<div>${doc.data().least ? "최소주문" + doc.data().least : ""} ${doc.data().fee ? ", 배달팁" + doc.data().fee : ""} </div>`) : ""}
                <div class="store__time">🕒 ${doc.data().time}</div>
                </div> 

                
                `

                console.log(doc.data());
            });
        });
    }
}
customElements.define('store-list', Store);