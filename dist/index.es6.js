import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class WhcgBoxContainer extends PolymerElement {

  static get template() {
    return html `
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
