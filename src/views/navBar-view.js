import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
import navBarStyles from '../styles/viewStyles/navBar.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../utils/icons.js'
/* --- ICONS --- */

/* --- IMAGES --- */
import logo from '../media/logos/icono_C.png'
/* --- IMAGES --- */

export class NavBar extends LitElement {
    static properties = {
        name: {},
    };

    constructor() {
        super();
        this.name = '';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(navBarStyles)}`,
    ]

    render() {
        return html`
            <nav class="general-section nav d-flexx d-row">
                <figure class="logo-container">
                    <img class="img-general" src="${logo}">
                </figure>

                <div class="search-container d-flexx d-row">
                    <a href="">Explorar</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <div class="search-btn"> ${unsafeHTML(icons.search)}</div>
                </div>

                <div class="other-section d-flexx d-row">
                    <div class="dropdown">
                        <button class="dropbtn btn-gen btn-outline btn-none d-flexx d-row">Otros ${unsafeHTML(icons.chevronDown)}</button>
                        <div class="dropdown-content">
                            <a href="#">FAQ´s</a>
                            <a href="#">Contacto</a>
                            <a href="#">Privacidad</a>
                            <a href="#">Términos</a>
                            <a href="#">Información de la compañía</a>
                        </div>
                    </div>
                    <a href="" class="btn-gen btn-outline">¡Unete!</a>
                    <div class="btn-gen btn-outline btn-circle"> ${unsafeHTML(icons.user)}</div>
                </div>
            </nav>
        `;
    }
}
customElements.define('nav-bar', NavBar);