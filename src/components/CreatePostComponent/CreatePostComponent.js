import './CreatePostComponent.css';
import CreatePostTemplate from './CreatePostComponent.hbs';

import PaymentComponent from '../PaymentComponent/PaymentComponent.js';
import InterviewComponent from '../InterviewComponent/InterviewComponent.js';

import {BACKEND_ADDRESS} from '../../config/config.js';

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

        this._interview = null;
        this._payment = null;
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
        this._interview = new InterviewComponent(document.getElementById('createPostComponentInterviewPlace'));
        this._payment = new PaymentComponent(document.getElementById('createPostComponentPaymentPlace'));
        document.getElementById('createPostComponentText').value = '';

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
            e.preventDefault();

            const formData = new FormData();

            formData.append('body', JSON.stringify({name: e.target.files[0].name}));
            formData.append('file', e.target.files[0]);

            fetch(
                BACKEND_ADDRESS + '/upload/photo',
                {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors',
                    credentials: 'include',
                }
            )
                .then((response) => {
                    console.log(response);
                    // return response.json();
                })
                .then((json) => {
                    console.log(json);
                });
        });
    }

    /**
     * clickGetDoc
     */
    clickGetDoc() {
        document.getElementById('createPostComponentGreenPartDoc').addEventListener('change', (e) => {
            e.preventDefault();

            console.log('doc!');

            const formData = new FormData();

            formData.append('body', JSON.stringify({name: e.target.files[0].name}));
            formData.append('file', e.target.files[0]);

            fetch(
                BACKEND_ADDRESS + '/upload/file',
                {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors',
                    credentials: 'include',
                }
            )
                .then((response) => {
                    console.log(response);
                    // return response.json();
                })
                .then((json) => {
                    console.log(json);
                });
        });
    }

    /**
     * clickCreateInterview
     */
    clickCreateInterview() {
        document.getElementById('createPostComponentGreenPartInterview').addEventListener('click', (e) => {
            e.preventDefault();

            this._interview.render();
        });
    }

    /**
     * clickCreatePayment
     */
    clickCreatePayment() {
        document.getElementById('createPostComponentGreenPartpayment').addEventListener('click', (e) => {
            e.preventDefault();

            this._payment.render();
        });
    }

    /**
     * clickCreatePublish
     */
    clickCreatePublish() {
        document.getElementById('createPostComponentGreenPartButton').addEventListener('click', (e) => {
            e.preventDefault();

            console.log('publish!');

            const post = {
                groupID: 1,
                test: document.getElementById('createPostComponentText').value,
                interviews: this._interview.getData(),
                photos: [],
                files: [],
                payments: [{
                    cost: 300,
                    currency: 1,
                }],
            };

            console.log(post);

            fetch(
                BACKEND_ADDRESS + '/posts/post',
                {
                    method: 'POST',
                    body: JSON.stringify(post),
                    mode: 'no-cors',
                    credentials: 'include',
                    header: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then((response) => {
                    console.log(response);
                    // return response.json();
                })
                .then((json) => {
                    console.log(json);
                });
        });
    }
}
