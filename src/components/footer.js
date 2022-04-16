export default class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="companyinfo">
        <span class="companyinfo__item">사업자정보확인 </span>
        <span class="companyinfo__item">이용약관 </span>
        <span class="companyinfo__item">전자금융거래이용약관 </span>
        <span class="companyinfo__item">개인정보처리방침 </span>
        </div
        `
    }
}
customElements.define('footer-wrap', Footer);