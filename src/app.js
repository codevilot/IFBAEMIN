import InputSizer from "./components/inputSizer.js";
const href = "./src/style/style.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = href;
const head = document.getElementsByTagName("head")
document.head.appendChild(link);

class App {
  constructor() {
    const $app = document.querySelectorAll('.app').forEach((element, index) =>
      new InputSizer(element)
      
    );

  }
}

new App();
