import styles from '../styles/main.css';

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();
      const mainCSS = document.createElement('style');
      mainCSS.appendChild(document.createTextNode(styles));
      if (this.shadowRoot) {
        this.shadowRoot.append(mainCSS);
      }
    }
  };
