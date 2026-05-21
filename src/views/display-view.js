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
                <aside class="display-sections">

                <div class="dropdown">
                    <input hidden="" class="sr-only" name="state-dropdown" id="state-dropdown" type="checkbox"/>
                    <label aria-label="dropdown scrollbar" for="state-dropdown" class="trigger"></label>
                    <ul class="list webkit-scrollbar" role="list" dir="auto">
                        <li class="listitem" role="listitem">
                            <article class="article">Hover to view scrollbar.</article>
                        </li>
                        <li class="listitem" role="listitem">
                            <article class="article">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
                                sunt tempora recusandae dolorum.
                            </article>
                        </li>
                        <li class="listitem" role="listitem">
                            <article class="article">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
                                sunt tempora recusandae dolorum.
                            </article>
                        </li>
                    </ul>
                </div>

                
                
                
                </aside>
                <article class="display-sections">RENDER</article>
            </section>
        `;
    }
}
customElements.define('display-view', DisplayView);