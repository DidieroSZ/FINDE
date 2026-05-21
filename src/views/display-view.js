import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
import displayStyles from '../styles/viewStyles/displayView.css?inline';
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
export class DisplayView extends LitElement {
    static properties = {
    };

    constructor() {
        super();
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(displayStyles)}`,
    ]

    render() {
        return html`
            <section class="general-section display-container">
                <aside class="display-sections filters-container">
                    <ul class="filters-list">

                        <li class="filter-display trans">
                            <details class="filter-details">
                                <summary class="filter-summary d-flexx d-row">
                                    <span class="filter-icon d-flexx">${unsafeHTML(icons.pin)}</span>
                                    <p>Ubicación</p>
                                    <span class="filter-visual d-flexx trans">${unsafeHTML(icons.chevronDown)}</span>
                                </summary>
                            </details>
                            <div class="filter-body trans">
                                <div class="inner-content">
                                    - Cerca de mí
                                    - Distancia (1km, 5km, 10km…)
                                    - Colonia / zona
                                    - En mapa
                                </div>
                            </div>
                        </li>
                        <li class="filter-display trans">
                            <details class="filter-details">
                                <summary class="filter-summary d-flexx d-row">
                                    <span class="filter-icon d-flexx">${unsafeHTML(icons.dollar)}</span>
                                    <p>Precio</p>
                                    <span class="filter-visual d-flexx trans">${unsafeHTML(icons.chevronDown)}</span>
                                </summary>
                            </details>
                            <div class="filter-body trans">
                                <div class="inner-content">
                                    - Cerca de mí
                                    - Distancia (1km, 5km, 10km…)
                                    - Colonia / zona
                                    - En mapa
                                </div>
                            </div>
                        </li>

                    </ul>
                </aside>

                <article class="display-sections">
                    RENDER
                </article>
            </section>
        `;
    }
}
customElements.define('display-view', DisplayView);