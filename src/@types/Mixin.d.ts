import { LitElement } from "lit";

declare global {
  export type LitMixin<T = {}> = new (...args: any[]) => T & LitElement;
}
