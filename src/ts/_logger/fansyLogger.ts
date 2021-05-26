class FancyLogger {
  static instance: any;
  logs: any[] = [];
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  log(message: any) {
    this.logs.push(message);
    console.log('Fancy: ', message)
  }

  printLogCount() {
    console.log(`${this.logs.length} Lodg`)
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;