'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');

class WhcgBoxContainer extends polymerElement_js.PolymerElement {

  static get template() {
    return polymerElement_js.html`
    <style>

      :root {
        background-color: var(--parmaco-transparent);
        color: var(--parmaco-base-color-100pct);
      }
        #flexbox {
          display: flex;
        }

      .row {  
          flex-direction: row;
      }

      .column {  
        flex-direction: column;
    }

    h2 {
      font-family: var(--parmaco-font-family);
      font-size: var(--parmaco-font-size-xl);
      font-weight: var(--parmaco-font-weight-medium);
    }

    ::slotted(*) {
      padding-right:20px;
      
    }

    </style>
    <h2>{{name}}</h2>
    <div id="flexbox">
      <slot id="slotid"></slot>
    </div>
  `;
  }

  static get properties() {
    return {
      column: {
        type: Boolean,
        notify: true,
        readOnly: false,
        observer: '_setDirection',
      },
      name: {
        type: String,
        notify: true,
        readOnly: false,
      },
    };
  }

  _setDirection() {
    this.$.flexbox.classList.remove('row');
    this.$.flexbox.classList.add('column');
  }
}

window.customElements.define('whcg-box-container', WhcgBoxContainer);

exports.WhcgBoxContainer = WhcgBoxContainer;
