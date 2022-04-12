import App from './App.js';
const href = "./src/style/style.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = href;
const head = document.getElementsByTagName("head")
document.head.appendChild(link);

const $app = document.querySelectorAll('.app').forEach((element, index) =>
    new App(element)

);