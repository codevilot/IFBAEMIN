const href = "./src/style/style.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = href;
const head = document.getElementsByTagName("head")
document.head.appendChild(link);
// CSS SET
export const globalState = new Proxy(
  {
    height: 500,
    width: 500,
  }
);


// const $app = document.querySelectorAll('.app').forEach((element, index) =>
//     console.log('h')
// );