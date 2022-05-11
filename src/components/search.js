export default class Search extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="maphead">
        <img class="arrow remove" src="./src/assets/svg/leftarrow.svg">
        <input class="search__store">

        </div>
        `
        this.querySelector(".arrow").onclick = (e) =>
            this.parentElement.classList.remove("open");
    }
}
customElements.define('search-wrap', Search);