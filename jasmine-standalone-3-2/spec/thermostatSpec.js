describe('Thermostat', () => {
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('will start with a temperature of 20 degrees', () => {
    expect(thermostat.currentTemperature).toEqual(20);
  });

  it('will increase the temperature when the up function is called', () => {
    thermostat.up(2);
    expect(thermostat.currentTemperature).toEqual(22);
  });

  it('will decrease the temperature when the down function is called', () => {
    thermostat.down(2);
    expect(thermostat.currentTemperature).toEqual(18);
  });
});