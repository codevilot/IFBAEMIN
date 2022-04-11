import Component from "../core/Component.js";

export default class InputSizer extends Component {
    setup() {
        this.$state = {
            height: 500,
            width: 500
        }
    }
    template() {
        const { height, width } = this.$state
        return `
    <span class="sizer">
    Width : <input value=${height} name="width"/>
    </span>
    <span>
    Height : <input value=${width} name="height"/>
    </span>
    `
    }

    setEvent() {

        this.$target.querySelectorAll('input').forEach((element, index) => {
            element.addEventListener('change', (event) => {
                const { height, width } = this.$state;
                this.setState()
                const $currentApp = event.target.parentElement.parentElement;
                // const $currentInput = element.
                if (event.target.name === "height") {
                    $currentApp.style.height = event.target.value + "px";
                } else if (event.target.name === "width") {
                    $currentApp.style.width = event.target.value + "px";
                }
            })
        })
    }
}