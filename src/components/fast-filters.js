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
            <div class="general-section fastFilters-container d-flexx d-row">
                ${this._renderFilters()}
            </div>
        `;
    }

    _renderFilters(){

        const filtros = [
            { key: 'all', value: 'Todos' }, 
            { key: 'cita-romantica', value: 'Cita romántica' }, 
            { key: 'plan-barato', value: 'Plan barato' }, 
            { key: 'tranquilo', value: 'Tranquilo' },
            { key: 'amigos', value: 'Amigos' },
            { key: 'divertido', value: 'Divertido' },
        ];
        return html`
            ${filtros.map(({ key, value }) => html`
                <div class="filter-pill">
                    <input type="checkbox" value="${key}" id="${key}">
                    <label class="btn-gen btn-outline d-flexx d-row trans" for="${key}">
                        ${value}
                    </label>   
                </div>
            `)}
        `;
    }
}
customElements.define('fast-filters', FastFilters);