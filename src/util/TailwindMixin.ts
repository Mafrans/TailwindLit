import css from "../styles/main.css?inline";

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    async connectedCallback() {
      super.connectedCallback();
      const stylesheet = await new CSSStyleSheet().replace(css);
      this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    }
  };
