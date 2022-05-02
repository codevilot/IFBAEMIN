const numSteps = 20.0;

let   boxElement = document.querySelector("#after")
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

window.addEventListener("load", (event) => {


  createObserver();
}, false);
function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        console.log('oh')
    });
  }
export function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px"
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}
