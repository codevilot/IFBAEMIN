import { globalState } from "../server/observer.js";
function handleIntersect(entries, observer, func) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(globalState.load, "before");
      globalState.load++;
      console.log(globalState.load, "after");
    }
  });
}
export function createObserver(container, div) {
  let options = {
    root: container,
    rootMargin: "0px",
  };
  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(div);
}
