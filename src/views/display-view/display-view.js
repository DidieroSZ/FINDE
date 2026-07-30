import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import displayStyles from './displayView.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

import img1 from '../../media/image-places/img-places-01.jfif'
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
                ${this._renderAside()}

                <article class="display-sections places-container">

                    <div class="card d-flexx d-col layout-1">
                        <figure class="item-card image-card">
                            <small class="label-image">Para hoy</small>
                            <button class="btn-gen btn-circle btn-fav d-flexx btn-float">${unsafeHTML(icons.heart)}</button>
                            <button class="btn-gen btn-circle btn-add d-flexx btn-float">${unsafeHTML(icons.add)}</button>
                            <img src="${img1}" class="img-general">
                        </figure>
                        <div class="item-card description-card">
                            <h4>The Hill Guest House</h4>
                            <p>One of Willard Price´s adventure stories featuring Hal and Roger Hunt. The boys have a new quarry. </p>
                        </div>
                        <hr>
                        <div class="item-card information-card d-flexx d-row">
                            <small class="label d-flexx d-row">${unsafeHTML(icons.star)} <b>4.8</b> Calif.</small>
                            <small class="label d-flexx d-row">${unsafeHTML(icons.list)} <b>30</b> Top</small>
                            <small class="label d-flexx d-row"><b>+2k</b> Visitas</small>
                        </div>
                        <hr>
                        <div class="item-card booking-card">
                            <span class="price-tag">$620</span>
                            <button class="btn-gen btn-booking trans">Ver Detalles</button>
                        </div>
                    </div>

                    <div class="card d-flexx d-col layout-1">
                        <figure class="item-card image-card">
                            <small class="label-image">Para hoy</small>
                            <img src="${img1}" class="img-general">
                        </figure>
                        <div class="item-card description-card">
                            <h4>The Hill Guest House</h4>
                            <p>One of Willard Price´s adventure stories featuring Hal and Roger Hunt. The boys have a new quarry. </p>
                        </div>
                        <hr>
                        <div class="item-card information-card d-flexx d-row">
                            <small class="label d-flexx d-row">${unsafeHTML(icons.star)} <b>4.8</b> Calif.</small>
                            <small class="label d-flexx d-row">${unsafeHTML(icons.list)} <b>30</b> Top</small>
                            <small class="label d-flexx d-row"><b>+2k</b> Visitas</small>
                        </div>
                        <hr>
                        <div class="item-card booking-card">
                            <span class="price-tag">$620</span>
                            <button class="btn-gen btn-booking trans">Ver Detalles</button>
                        </div>
                    </div>



                </article>
            </section>
        `;
    }

    _renderAside(){
        return html`
            <aside class="display-sections filters-container">
                <ul class="filters-list">
                    <li class="filter-display trans">
                        <details class="filter-details">
                            <summary class="filter-summary d-flexx d-row">
                                <span class="filter-icon d-flexx">${unsafeHTML(icons.pin)}</span>
                                <p>Ubicación</p>
                                <span class="filter-visual d-flexx trans"
                                >${unsafeHTML(icons.chevronDown)}</span>
                            </summary>
                        </details>
                        <div class="filter-body trans">
                            <div class="inner-content">
                                - Cerca de mí - Distancia (1km, 5km, 10km…) - Colonia / zona
                                - En mapa
                            </div>
                        </div>
                    </li>
                    <li class="filter-display trans">
                        <details class="filter-details">
                            <summary class="filter-summary d-flexx d-row">
                                <span class="filter-icon d-flexx">${unsafeHTML(icons.dollar)}</span>
                                <p>Precio</p>
                                <span class="filter-visual d-flexx trans"
                                >${unsafeHTML(icons.chevronDown)}</span>
                            </summary>
                        </details>
                        <div class="filter-body trans">
                            <div class="inner-content">
                                - Gratis - $ - $$ - $$$ - $$$$
                            </div>
                        </div>
                    </li>
                </ul>
            </aside>
        `;
    }
}
customElements.define('display-view', DisplayView);