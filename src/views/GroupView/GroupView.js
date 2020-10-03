import BaseView from '../BaseView/BaseView.js';

import HeaderComponent from '../../components/HeaderComponent/HeaderComponent.js';
import CreatePostComponent from '../../components/CreatePostComponent/CreatePostComponent.js';

import GroupViewTemplate from './GroupView.hbs';
import './GroupView.css';


/**
 * Class Group view.
 */
export default class GroupView extends BaseView {
    /**
     * GroupView view constructor.
     * @constructor
     * @param {object} el - Root application div.
     * @param {*} router
     * @param {*} args
     */
    constructor(el, router, args) {
        super(el, router, {});
        this.el = el;
        this.args = args;
    }

    /**
     * Render Login view.
     */
    render() {
        console.log('here');
        this.el.innerHTML = GroupViewTemplate(this.getContext());

        const header = new HeaderComponent(document.getElementById('groupViewHeaderContainer'));
        header.render();

        const createPost = new CreatePostComponent(document.getElementById('groupViewPostCreatePost'));
        createPost.render();
    }

    /**
     * get context
     * @return {object}
     */
    getContext() {
        return {
            groupTitle: 'Name of the fucking group',
            groupCount: '10',
        };
    }
}
