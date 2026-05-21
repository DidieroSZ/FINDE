import { LitElement, css, html } from "lit";
import { unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { gsap } from "gsap";

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
/* --- STYLES --- */

/* --- SERVICES --- */
/* --- SERVICES --- */

/* --- COMPONENTS --- */
import '../views/navBar-view.js';
import '../views/display-view.js';
import '../components/category-filter.js';
import '../components/fast-filters.js';
/* --- COMPONENTS --- */

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

    firstUpdated(){
        this._animationLoader();
    }

    render() {
        return html`
            <div class="transitionContainer">
                <div class="transition-row row-1">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
                <div class="transition-row row-2">
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                    <div class="block"></div>
                </div>
            </div>

            <main class="main-section general-section">
                <nav-bar></nav-bar>
                <category-filter></category-filter>
                <fast-filters></fast-filters>
                <display-view></display-view>
            </main>
            
        `;
    }
    _animationLoader() {

        this.blocks = this.renderRoot.querySelectorAll('.block');
        this.row1Blocks = this.renderRoot.querySelectorAll('.row-1 .block');
        this.row2Blocks = this.renderRoot.querySelectorAll('.row-2 .block');
        this.animateBlocks({
            from: 1,
            to: 0,
            ease: "expo.inOut",
        }).then(() => {
            gsap.set(this.blocks, {
                visibility: "hidden",
            });
        });
    }

    animateBlocks({ from, to, ease }) {
        return new Promise((resolve) => {
            gsap.set(this.blocks, {
                visibility: "visible",
                scaleY: from,
            });

            const animationConfig = {
                scaleY: to,
                duration: 1.5,
                delay: 0.2,
                stagger: {
                    each: 0.1,
                    from: "center",
                    grid: [1, 5],
                    axis: "x",
                },
                ease,
            };
            const tl = gsap.timeline({
                onComplete: resolve,
            });
            tl.to(this.row1Blocks, animationConfig, 0);
            tl.to(this.row2Blocks, animationConfig, 0);
        });
    }
}
customElements.define('home-page', HomePage);
/* window.customElements.define("my-element", MyElement); */