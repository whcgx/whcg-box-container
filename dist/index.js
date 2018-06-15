'use strict';

var polymerElement_js = require('@polymer/polymer/polymer-element.js');

class WhcgBoxContainer extends polymerElement_js.PolymerElement {

  static get template() {
    return polymerElement_js.html `
    <style>
        

        #flexbox {
          display: flex;
        }

      .row {  
          flex-direction: row;
      }

      .column {  
        flex-direction: column;
    }

    ::slotted(*) {
      padding-right:20px;
    }

    </style>

    <div id="flexbox">
      <slot id="slotid"></slot>
    </div>
   
`
  };

  static get properties() {

    return {
      column: {
            type: Boolean,
            notify: true,
            readOnly: false,
            observer: '_setDirection'
        },
    }
  };

  _setDirection() {
    this.$.flexbox.classList.remove('row');
    this.$.flexbox.classList.add('column');
  }

}


window.customElements.define('whcg-box-container', WhcgBoxContainer);
