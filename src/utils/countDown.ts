/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
class CountDown {
  time: number;
  timeInterval: any;
  interval: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  listen?: Function;
  constructor({ time, interval = 100 }: { [key: string]: number } = {}) {
    this.time = time;
    this.interval = interval;
  }
  public start(time: number) {
    if (time) this.time = time;
    if (this.time) {
      this.timeInterval = setInterval(() => {
        console.log(this.time, this.interval);
        this.time -= this.interval;
        if (this.time < 0) {
          this.end();
          return;
        }
        if (this.listen) {
          this.listen({
            time: this.time || 0,
            status: "underway",
          });
        }
      }, this.interval);
    } else {
      this.end();
    }
  }
  public end() {
    clearInterval(this.timeInterval);
    if (this.listen) {
      this.listen({
        time: this.time < 0 ? 0 : this.time,
        status: "end",
      });
    }
  }

  public stop() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  }

  public update(time: number) {
    if (this.timeInterval && time) {
      clearInterval(this.timeInterval);
      this.start(time);
    }
  }
}

class countDown extends CountDown {
  constructor() {
    super();
  }
  countDown({ time, interval = 1000 }: { [key: string]: number } = {}) {
    if (time) this.time = time;
    this.interval = interval;
    this.timeInterval = null;
    return this;
  }
}
export default countDown;
