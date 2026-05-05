import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
import categoryFilter from '../styles/componentStyles/categoryFilter.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../utils/icons.js'
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
        css`${unsafeCSS(categoryFilter)}`,
    ]

    render() {
        return html`
            <section class="general-section category-filter d-flexx">
                <label for="restaurantes" class="radio-category d-flexx d-col">
                    
                    <figure class="icon-category">${unsafeHTML(icons.restaurantes)}</figure>
                    <input type="radio" id="restaurantes" name="category" value="restaurantes">
                    <p class="name-category">Restaurantes</p>
                    <span class="line-category"></span>
                </label>
            </section>
        `;
    }
}
customElements.define('category-filter', CategoryFilter);