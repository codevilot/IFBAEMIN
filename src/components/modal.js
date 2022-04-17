export default class Modal extends HTMLElement{
    connectedCallback() {
        this.class = 'address'+this.parentElement.className;
        this.classtoid ='classtoid'+this.parentElement.className;
        this.innerHTML = `
            <div class="${this.classtoid}" style="height:0%">
            <div id="${this.class}" style="z-index:1;-webkit-overflow-scrolling:touch;">
            <img src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnCloseLayer" 
            style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" 
            onclick="closeDaumPostcode(${this.class})" alt="닫기 버튼">
            </div>
            </div>
        `
    }
    
}

customElements.define('modal-wrap', Modal);