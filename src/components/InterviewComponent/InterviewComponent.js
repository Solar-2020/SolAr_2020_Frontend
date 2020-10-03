import './InterviewComponent.css';
import InterviewTemplate from './InterviewComponent.hbs';

/** Class representing a Interview component. */
export default class InterviewComponent {
    /**
     * Interview component constructor.
     * @constructor
     * @param {object} parent - Root application div.
     */
    constructor(parent = document.body) {
        this._parent = parent;
        this._data = {};
        this._answerId = 2;
        this._answerPlace = null;
        this._flag = 0;
    }

    /**
     * Get Interview component data.
     * @return {object} Interview component data.
     */
    get data() {
        return this._data;
    }

    /**
     * Render Interview component.
     * @param {object} context - Context to render with.
     */
    render(context = {}) {
        this._parent.innerHTML = InterviewTemplate(context);

        this._answerPlace = document.getElementById('interviewComponentAnswers');

        this.addDestroyListener();
        // this.addListenerForClose(1);
        this.addAnswerListener();

        this._flag = 1;
    }

    /**
     * destroy component
     */
    destroy() {
        this._parent.innerHTML = '';
        this._flag = 0;
    }

    /**
     * ad destroy listener
     */
    addDestroyListener() {
        document.getElementById('interviewComponentClose').addEventListener('click', (e) =>{
            e.preventDefault();

            this.destroy();
            this._answerId = 2;
        });
    }

    /**
     * addListener
     * @param {*} closeId
     */
    addListenerForClose(closeId) {
        document.getElementById('interviewComponentDelete_' + closeId).addEventListener('click', (e) => {
            e.preventDefault();

            document.getElementById('interviewComponentAnswers_' + closeId).innerHTML = '';
        });
    }

    /**
     * add answerListener
     */
    addAnswerListener() {
        document.getElementById('interviewComponentAnswerAdd').addEventListener('click', (e) => {
            e.preventDefault();

            document.getElementById('interviewComponentAnswers'). innerHTML +=
            `<div id="interviewComponentAnswers_${this._answerId}">
                <input name="answer${this._answerId}" type="text">
            </div>`;

            // this.addListenerForClose(this._answerId);
            this._answerId += 1;
        });
    }

    /**
     * get data
     * @return {*}
     */
    getData() {
        const form = document.getElementById('interviewComponentForm');

        if (!this._flag) {
            return [{
                text: '',
                type: 1,
                answers: [],
            }];
        }

        const interview = [{
            text: form.elements['title'].value,
            type: 1,
            answers: [],
        }];

        for (let i = 1; i < this._answerId; i++) {
            interview[0].answers.push({'text': form.elements[`answer${i}`].value});
        }

        return interview;
    }
}
