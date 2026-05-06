import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
import fastStyles from '../styles/componentStyles/fastFilters.css?inline';
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
export class FastFilters extends LitElement {
    static properties = {
    };

    constructor() {
        super();
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(fastStyles)}`,
    ]

    render() {
        return html`
            <div class="general-section fastFilters-container">
                <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                <label class="form-check-label" for="checkDefault">
                    Default checkbox
                </label>
            </div>
        `;
    }
}
customElements.define('fast-filters', FastFilters);