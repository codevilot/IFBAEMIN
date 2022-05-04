const globalState = new Proxy(
  { category: "all", load: 0, observers: new Set() } || {},
  {
    set: function (state, key, value) {
      if (value != "") {
        state[key] = value;
        observable.notifyAll(value);
      }
      return true;
    },
  }
);

function Observer() {
  this.observerContainer = [];
}
Observer.prototype.subscribe = function (element) {
  this.observerContainer.push(element);
};
Observer.prototype.unsubscribe = function (element) {
  const elementIndex = this.observerContainer.indexOf(element);
  if (elementIndex > -1) {
    this.observerContainer.splice(elementIndex, 1);
  }
};
Observer.prototype.notifyAll = function (element) {
  this.observerContainer.forEach(function (observerElement) {
    observerElement(element);
  });
};
const observable = new Observer();

export { globalState, observable };
