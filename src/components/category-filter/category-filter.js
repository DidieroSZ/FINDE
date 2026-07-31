import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import innerStyles from './categoryFilter.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CategoryFilter extends LitElement {
    static properties = {
    };

    constructor() {
        super();
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ]

    render() {
        return html`
            <section class="general-section category-filter d-flexx d-row">
                ${this._renderCategory()}
            </section>
        `;
    }

    _renderCategory(){

        const categorias = [
            'restaurantes',
            'planes',
            'bienestar',
            'naturaleza',
            'lugares',
            'eventos',
            'noche',
            'experiencias',
            'cultura',
            'deporte',
        ]
        return html`
            ${categorias.map((cat, index) => html`
                <label for="${cat}" class="radio-category d-flexx d-col">
                    <input type="radio" id="${cat}" name="category" value="${cat}" ?checked=${index == 0}>
                    <figure class="icon-category opacity-category trans">
                        ${unsafeHTML(icons[cat])}
                    </figure>
                    <p class="name-category opacity-category trans">${cat}</p>
                    <span class="line-category trans"></span>
                </label>
            `)}
        `;
    }
}
customElements.define('category-filter', CategoryFilter);