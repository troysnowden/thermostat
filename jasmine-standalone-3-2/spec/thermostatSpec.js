describe('Thermostat', () => {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe('constructor', () => {
    it('will start with a temperature of 20 degrees', () => {
      expect(thermostat.currentTemperature).toEqual(20);
    });
    it('isPowerSaving will start true', () => {
      expect(thermostat.isPowerSaving).toEqual(true);
    });
    it('miTemp wil be 10', () => {
      expect(thermostat.minTemp).toEqual(10);
    });
    it('maxTemp will be 25', () => {
      expect(thermostat.maxTemp).toEqual(25);
    });
    it('currentEnergyUsage will be medium-usage', () => {
      expect(thermostat.currentEnergyUsage).toEqual('medium-usage')
    });
  });

  describe('up', () => {
    it('will increase the temperature when the up function is called', () => {
      thermostat.up(2);
      expect(thermostat.currentTemperature).toEqual(22);
    });
    it('will return an error if tried to increase past max', () => {
      expect(thermostat.up(20)).toEqual("Cannot increase over the maxiumum temperature")
    });
  });

  describe('down', () => {
    it('will decrease the temperature when the down function is called', () => {
      thermostat.down(2);
      expect(thermostat.currentTemperature).toEqual(18);
    });
    it('will return an error when decreased under min', () => {
      expect(thermostat.down(20)).toEqual("Cannot decrease under the minimum temperature")
    });
  });

  describe('powerSaving', () => {
    it('power saving will default to on', () => {
      expect(thermostat.isPowerSaving).toBeTruthy();
      expect(thermostat.maxTemp).toEqual(25);
    });
    it('when power saving is turned off the max temp will increase to 32', () => {
      thermostat.changePowerSaving();
      expect(thermostat.isPowerSaving).toBeFalsy();
      expect(thermostat.maxTemp).toEqual(32);
    });
  });

  describe('reset', () => {
    it('will reset the temperature to 20 degrees', () => {
      thermostat.up(5);
      thermostat.reset();
      expect(thermostat.currentTemperature).toEqual(20);
    });
  });

  describe('currentEnergyUsage', () => {
    it('when the temperature is below 18, the usage will be low', () => {
      thermostat.down(5)
      expect(thermostat.currentEnergyUsage).toEqual('low-usage')
    });
    it('when the temperature is below 25, the usage will be medium', () => {
      expect(thermostat.currentEnergyUsage).toEqual('medium-usage')
    });
    it('when the temperature is equal to 25, the usage will be medium', () => {
      thermostat.up(5)
      expect(thermostat.currentEnergyUsage).toEqual('medium-usage')
    });
    it('when the temperature is above 25, the usage will be high', () => {
      thermostat.changePowerSaving()
      thermostat.up(10)
      expect(thermostat.currentEnergyUsage).toEqual('high-usage')
    });
  });
});