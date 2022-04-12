import Component from "../core/Component.js";

export default class InputSizer extends Component {

    setup() {
        this.$state = {
            height: 450,
            width: 450
        }
    }
    template() {

        const { height, width } = this.$state
        return `
                <span>
                Width : 
                </span>
                <input value=${height} class="width"/>
                <span>
                Height : 
                </span>
                <input value=${width} class="height"/>
                `
    }

    setEvent() {

        console.log(document.querySelectorAll('input'))
        this.$target.querySelectorAll('input').forEach((element, index) => {
            element.addEventListener('change', (event) => {
                const { height, width } = this.$state;
                this.setState()
                // const $currentApp = event.target.parentElement.parentElement;
                // // const $currentInput = element.
                // if (event.target.name === "height") {
                //     $currentApp.style.height = event.target.value + "px";
                // } else if (event.target.name === "width") {
                //     $currentApp.style.width = event.target.value + "px";
                // }
                // const $currentMain = event.$target
                // console.log(event.$target)
            })
        })
    }
}