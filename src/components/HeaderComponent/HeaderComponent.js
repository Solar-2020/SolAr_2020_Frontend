import './HeaderComponent.css';
import HeaderTemplate from './HeaderComponent.hbs';

/** Class representing a Header component. */
export default class HeaderComponent {
    /**
     * Header component constructor.
     * @constructor
     * @param {object} parent - Root application div.
     */
    constructor(parent = document.body) {
        this._parent = parent;
        this._data = {};
    }

    /**
     * Get Header component data.
     * @return {object} Header component data.
     */
    get data() {
        return this._data;
    }

    /**
     * Render Header component.
     * @param {object} context - Context to render with.
     */
    render(context = {}) {
        this._parent.innerHTML = HeaderTemplate(context);
    }
}
