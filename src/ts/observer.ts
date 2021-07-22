import { Control } from "./controls";

export class Observer {
  listeners: [];
 
  constructor() {
    this.listeners = [];
  }
  addListener(callback: () => void) {
    this.listeners.push();
  }
  dispatch() {
    
  }
}