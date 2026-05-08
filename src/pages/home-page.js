import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
/* import generalStyles from '../styles/mainStyles.css?inline';
import componentStyles from '../styles/componetStyles/strong-component.css?inline'; */
/* --- STYLES --- */

/* --- SERVICES --- */
/* import { generatePasswords } from '../services/service-generatePassword.js' */
/* --- SERVICES --- */

/* --- COMPONENTS --- */
import '../views/navBar-view.js';
import '../views/display-view.js';
import '../components/category-filter.js';
import '../components/fast-filters.js';
/* --- COMPONENTS --- */

/* --- ICONS --- */
/* import { icons } from '../utils/icons.js' */
/* --- ICONS --- */

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class HomePage extends LitElement {
    static properties = {
        name: {},
    };

    constructor() {
        super();
        this.count = 0;
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        /* SuperElement.styles, */
        /* css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(componentStyles)}`, */
    ]

    render() {
        return html`
            <main class="main-section general-section">
                <nav-bar></nav-bar>
                <category-filter></category-filter>
                <fast-filters></fast-filters>
                <display-view></display-view>
            </main>
        `;
    }
}
customElements.define('home-page', HomePage);
/* window.customElements.define("my-element", MyElement); */