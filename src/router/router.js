import { LitElement, html } from 'lit';
import { routes } from './routes.js';

import '../pages/home-page.js';
/* import '../pages/counter.page.js';
import '../pages/wasted.page.js';
import '../pages/not-found.page.js'; */

export class AppRouter extends LitElement {

    static properties = {
        currentRoute: { type: String }
    };

    constructor() {
        super();
        this.currentRoute = window.location.pathname;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener(
            'popstate',
            this.handleRouteChange
        );
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener(
            'popstate',
            this.handleRouteChange
        );
    }

    handleRouteChange = () => {
        this.currentRoute = window.location.pathname;
    };
    navigate(path) {
        window.history.pushState({}, '', path);
        this.currentRoute = path;
    }

    renderPage() {
        console.log(this.currentRoute);
        const component = routes[this.currentRoute] || 'not-found-page';
        console.log(component);

        switch(component) {
            case 'home-page':
                return html`
                    <home-page></home-page>
                `;
            case 'counter-page':
                return html`
                    <counter-page></counter-page>
                `;
            case 'wasted-page':
                return html`
                    <wasted-page></wasted-page>
                `;
            default:
                return html`
                    <not-found-page></not-found-page>
                `;
        }
    }

    render() {
        return html`
            ${this.renderPage()}
        `;
    }
}
customElements.define('app-router', AppRouter);