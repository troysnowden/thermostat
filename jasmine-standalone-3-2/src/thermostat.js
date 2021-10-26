const minTemp = 10;

class Thermostat {
  constructor() {
    this.currentTemperature = 20;
    this.isPowerSaving = true;
    this.minTemp = minTemp;
    this.maxTemp = 25;
    this.currentEnergyUsage = 'medium-usage';
  };

  up(increase = 1) {
    if((this.currentTemperature + increase) > this.maxTemp){
      return "Cannot increase over the maxiumum temperature";
    } else {
      this.currentTemperature += increase;
      this._checkEnergyUsage();
    }
  }

  down(decrease = 1) {
    if((this.currentTemperature - decrease) < this.minTemp){
      return "Cannot decrease under the minimum temperature";
    } else {
      this.currentTemperature -= decrease;
      this._checkEnergyUsage();
    }
  }

  changePowerSaving() {
    this.isPowerSaving = (this.isPowerSaving ? false : true);
    this._changeTemp();
  }

  _changeTemp(){
    this.maxTemp = (this.isPowerSaving ? 25 : 32);
  }

  reset() {
    this.currentTemperature = 20;
  }

  _checkEnergyUsage() {
    if(this.currentTemperature < 18){
      this.currentEnergyUsage = 'low-usage';
    } else if(this.currentTemperature <= 25){
      this.currentEnergyUsage = 'medium-usage';
    } else {
      this.currentEnergyUsage = 'high-usage';
    }
  }
}