
function handleIntersect(entries, observer, func) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('view')
    }

  });

}
export function createObserver(container, div) {
  let options = {
    root: container,
    rootMargin: "0px"
  };
  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(div);

}
