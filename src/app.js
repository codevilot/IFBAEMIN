
import Container from "./components/container.js"
import Header from "./components/header.js"
import Body from "./components/body.js"
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./src/style/style.css";
const head = document.getElementsByTagName("head");
document.head.appendChild(link);
// CSS SET


// export const globalState = new Proxy(
//   {
//     height: 500,
//     width: 500,
//   }
// );

class AppContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <container-wrap>    
    </container-wrap>

    `;

  }
}

customElements.define('app-container', AppContainer);
