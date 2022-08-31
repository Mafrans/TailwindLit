import stylesheetURL from "../styles/main.css?url";

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheetURL;
      this.shadowRoot.append(link);
    }
  };
