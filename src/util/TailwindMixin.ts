import css from "../styles/main.css?inline";

const supportsAdoptedCSS = Array.isArray(document.adoptedStyleSheets);

export const TW = <T extends LitMixin>(superClass: T): T =>
  class Mixin extends superClass {
    static styleElement: HTMLStyleElement;

    static stylesheet: CSSStyleSheet;

    // Disable no-explicit-any because Mixin constructor parameters must have an any[] type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      void this.createStylesheet();
    }

    async createStylesheet() {
      if (supportsAdoptedCSS) {
        if (!Mixin.stylesheet) {
          Mixin.stylesheet = new CSSStyleSheet();
          await Mixin.stylesheet.replace(css);
        }
        this.shadowRoot.adoptedStyleSheets.push(Mixin.stylesheet);
      } else {
        if (!Mixin.styleElement) {
          Mixin.styleElement = document.createElement("style");
          Mixin.styleElement.textContent = css;
        }
        this.shadowRoot.append(Mixin.styleElement.cloneNode());
      }
    }
  };
