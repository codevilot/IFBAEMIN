import InputSizer from "./components/inputSizer.js";
import Component from "./core/Component.js";
export default class App extends Component {
  setup() {

  }
  template() {
    return `
      <header></header>
      <main></main>
      <footer></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('header');
    new InputSizer($header);
  }

}