class Thermostat {
  constructor() {
    this.currentTemperature = 20;
  }

  up(increase) {
    this.currentTemperature += increase;
  }

  down(decrease) {
    this.currentTemperature -= decrease;
  }
}