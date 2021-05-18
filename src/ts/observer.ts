import { Control } from "./controls";

export class Observer {
  listeners: any[];
  // callback: () => void;
  constructor() {
    this.listeners = [];
  }
  addListener(callback: () => void) {
    this.listeners.push(callback);
  }
  dispatch() {
    this.listeners.forEach(it => it());
  }
}