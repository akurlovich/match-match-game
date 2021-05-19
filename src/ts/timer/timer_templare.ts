export class TimerComponent {
  startTime!: Date;
  stopTime!: Date;
  active: boolean = false
  get display() { return (this.startTime && this.stopTime) ? +this.stopTime - +this.startTime : 0 }

  timer() {
    if (this.active) {
      this.stopTime = new Date()
      setTimeout(()=>{
        this.timer()
      }, 1000)
    }
  }

  start() {
    this.startTime = new Date()
    this.stopTime = this.stopTime
    this.active = true
    this.timer()
  }

  stop() {
    this.stopTime = new Date()
    this.active = false
  }
}