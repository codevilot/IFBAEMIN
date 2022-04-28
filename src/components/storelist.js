import { globalState, observable } from "../server/observer.js";
import { db } from "../server/firebase.js"
export default class Store extends HTMLElement {
    connectedCallback() {
        observable.subscribe(globalState.category);
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
        <div class="stores">
        </div>
        `

        this.querySelector('.menu__board').onclick = e => {
            globalState.category = e.target.classList[0];
            this.querySelector('.title').innerHTML = globalState.category;
            listMake();
        }
    
        const listAdd =() =>{
        db.collection("store").where("category", "==", this.category).get().then((querySnapshot) => {
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
            });
        });}
        const listMake =() =>{
            const stores = this.querySelector('.stores');
            stores.innerHTML = ``;
            db.collection("store").where("category", "==", globalState.category).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const div = document.createElement('div');
                    stores.appendChild(div);
                    div.classList.add('store__box');
                    div.innerHTML = `<img class="store__img" src="https://picsum.photos/200"> 
                    <div class="store__info">
                    <div class="store__name">${doc.data().name}${doc.data().coupon ? `<span class="coupon">쿠폰</span>` : ""}</div> 
                    <div>⭐ ${doc.data().score} <span class="store__inner__menu">${doc.data().menu}</span></div>
                    ${doc.data().least || doc.data().fee ? (`<div>${doc.data().least ? "최소주문" + doc.data().least : ""} ${doc.data().fee ? ", 배달팁" + doc.data().fee : ""} </div>`) : ""}
                    <div class="store__time">🕒 ${doc.data().time}</div>
                    </div> 
                    `
                });
            });}
        listMake();
    }
}
customElements.define('store-list', Store);