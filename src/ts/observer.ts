
export class Observer {
  listeners: any[];
 
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