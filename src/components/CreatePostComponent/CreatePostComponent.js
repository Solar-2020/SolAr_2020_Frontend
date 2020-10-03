import './CreatePostComponent.css';
import CreatePostTemplate from './CreatePostComponent.hbs';

import PaymentComponent from '../PaymentComponent/PaymentComponent.js';

/** Class representing a CreatePost component. */
export default class CreatePostComponent {
    /**
     * CreatePost component constructor.
     * @constructor
     * @param {object} parent - Root application div.
     */
    constructor(parent = document.body) {
        this._parent = parent;
        this._data = {};
    }

    /**
     * Get CreatePost component data.
     * @return {object} CreatePost component data.
     */
    get data() {
        return this._data;
    }

    /**
     * Render CreatePost component.
     * @param {object} context - Context to render with.
     */
    render(context = {}) {
        this._parent.innerHTML = CreatePostTemplate(context);

        this.addListeners();
    }

    /**
     * add listeners
     */
    addListeners() {
        this.clickGetPhoto();
        this.clickGetDoc();
        this.clickCreateInterview();
        this.clickCreatePayment();
        this.clickCreatePublish();
    }

    /**
     * clickGetPhoto
     */
    clickGetPhoto() {
        document.getElementById('createPostComponentGreenPartAddPhoto').addEventListener('change', (e) => {
            console.log('file!');
        });
    }

    /**
     * clickGetDoc
     */
    clickGetDoc() {
        document.getElementById('createPostComponentGreenPartDoc').addEventListener('change', (e) => {
            console.log('doc!');
        });
    }

    /**
     * clickCreateInterview
     */
    clickCreateInterview() {
        document.getElementById('createPostComponentGreenPartInterview').addEventListener('click', (e) => {
            console.log('survey!');
        });
    }

    /**
     * clickCreatePayment
     */
    clickCreatePayment() {
        document.getElementById('createPostComponentGreenPartpayment').addEventListener('click', (e) => {
            console.log('payment!');

            const payment = new PaymentComponent(document.getElementById('createPostComponentPaymentPlace'));
            payment.render();
        });
    }

    /**
     * clickCreatePublish
     */
    clickCreatePublish() {
        document.getElementById('createPostComponentGreenPartButton').addEventListener('click', (e) => {
            console.log('publish!');
        });
    }
}
