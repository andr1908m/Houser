import { LitElement, html } from "@polymer/lit-element";

class BenefitTag extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      titl: String,
      icon: String
    };
  }
  _render(props) {
    console.log(props);
    return html`
      <style>
        @import url('https://use.fontawesome.com/releases/v5.1.0/css/solid.css');
        @import url('https://use.fontawesome.com/releases/v5.1.0/css/fontawesome.css');
        .benefit {
          height: 100%;
          width: 100%;
          position: relative;
          display: inline-block;
          text-align: center;
          z-index: 1;
        }

        .benefit .container {
          -webkit-transition: all 500ms ease-in-out;
          transition: all 500ms ease-in-out;
        }

        .benefit .container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 0;
          height: 100%;
          background-color: #3A92FD;
          -webkit-transition: all 500ms ease-in-out;
          transition: all 500ms ease-in-out;
          color: white;
          z-index: -1;
          -webkit-transform: scaleX(0);
                  transform: scaleX(0);
          -webkit-transform-origin: 0 50%;
                  transform-origin: 0 50%;
        }

        .benefit .container .icon {
          width: 2vw;
          height: 2vh;
          font-size: 2vw;
          font-weight: 900;
        }

        .benefit .container p {
          display: block;
        }

        .benefit .container:hover {
          color: white;
        }

        .benefit .container:hover p {
          display: block;
        }

        .benefit .container:hover:before {
          width: 100%;
          -webkit-transform: scaleX(1);
                  transform: scaleX(1);
        }
      </style>
      <div class="benefit">
        <div on-click="${e => console.log(e)}" class="container">
          <i></i>
          <h5>${props.titl}</h5>
          <p><slot></slot></p>
        </div>
      </div>`;
  }

  _didRender({ icon }) {
    let classes = icon.split(" ");
    console.log(classes);

    classes.forEach(css => {
      this.shadowRoot.querySelector("i").classList.add(css);
    });
  }
}

window.customElements.define("benefit-tag", BenefitTag);
