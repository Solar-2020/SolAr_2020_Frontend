import './C1.css';
import template from './C1.hbs';

/**
 * Phone mask component
 *
 * @description
 * Маска инпута. Значения:
 * "I" - одиночный инпут для ввода одной цифры
 * "X" - серый блок с символом "X"
 * "*" - серый блок с символом "●"
 * <цифра> - серый блок с введенной цифрой
 * <не цифра> - символ отображается "как есть"
 */
export default class C1 {
    /**
     * Phone mask component constructor
     * @param {*} parent
     */
    constructor(parent = document.body) {
        this._parent = parent;
    }

    /**
     * Render mask form
     */
    render() {
        this._parent.innerHTML = template();
    }
}
