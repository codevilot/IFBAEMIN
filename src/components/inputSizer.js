import Component from "../core/Component.js";

export default class InputSizer extends Component {
    setup() {
        this.$state = { width: 'width', height: 'height' };
    }
    template() {
        const { width, height } = this.$state;
        return `
    <span>
    Width : <input value="" />
    </span>
    <span>
    Height : <input value="" />
    </span>
    `
    }

    setEvent() {
        this.$target.querySelector('input').addEventListener('change', (event) => {
            const $app = document.querySelector('.app');
            $app.style.height = height;
            $app.style.width = width;
        })
        // this.$target.querySelector('button').addEventListener('click', () => {
        //     const { input } = this.$state;
        //     this.setState({ input: [...input, `item${input.length + 1}`] });
        // });
    }
}