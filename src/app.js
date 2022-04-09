// import Items from "./components/Items.js";

// Append css .. https://openwiki.kr/tech/javascript_css_append
const href = "./src/style/style.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = href;
const head = document.getElementsByTagName("head")
document.head.appendChild(link);

class App {
  constructor() {
    const $app = document.querySelectorAll('.app');
    // new Items($app);
  }
}

new App();
