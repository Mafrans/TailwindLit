// Components
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "../components/HelloWorld";
import "../styles/main.css";
import { TW } from "../util/TWMixin";

@customElement("x-index-page")
export class IndexPage extends TW(LitElement) {
  render() {
    return html`
      <div class="container">
        <x-hello-world></x-hello-world>
      </div>
    `;
  }
}
