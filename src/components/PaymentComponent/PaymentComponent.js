import './PaymentComponent.css';
import PaymentTemplate from './PaymentComponent.hbs';

/** Class representing a Payment component. */
export default class PaymentComponent {
    /**
     * Payment component constructor.
     * @constructor
     * @param {object} parent - Root application div.
     */
    constructor(parent = document.body) {
        this._parent = parent;
        this._data = {};
    }

    /**
     * Get Payment component data.
     * @return {object} Payment component data.
     */
    get data() {
        return this._data;
    }

    /**
     * Render Payment component.
     * @param {object} context - Context to render with.
     */
    render(context = {}) {
        this._parent.innerHTML = PaymentTemplate(context);

        this.addDestroyListener();
    }

    /**
     * destroy component
     */
    destroy() {
        this._parent.innerHTML = '';
    }

    /**
     * ad destroy listener
     */
    addDestroyListener() {
        document.getElementById('paymentComponentContainerCloseButton').addEventListener('click', (e) =>{
            e.preventDefault();

            this.destroy();
        });
    }
}
