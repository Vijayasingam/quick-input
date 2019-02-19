import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `quick-input`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class QuickInput extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'quick-input',
      },
    };
  }
}

window.customElements.define('quick-input', QuickInput);
