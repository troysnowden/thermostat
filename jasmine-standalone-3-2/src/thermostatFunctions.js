let thermostat = new Thermostat();

function thermostatUp() {
  thermostat.up();
  showEnergyUsage()
  document.getElementById('temperature-display').innerHTML = thermostat.currentTemperature;
}

function thermostatDown() {
  thermostat.down();
  showEnergyUsage()
  document.getElementById('temperature-display').innerHTML = thermostat.currentTemperature;
}

function isPowerSaving(){
  if(thermostat.isPowerSaving){
    thermostat.changePowerSaving()
    document.getElementById('on-display').style.color = "black";
    document.getElementById('off-display').style.color = "red";
  } else {
    thermostat.changePowerSaving()
    document.getElementById('on-display').style.color = "green";
    document.getElementById('off-display').style.color = "black";
  }
}

function showEnergyUsage(){
  if(thermostat.currentEnergyUsage == "low-usage"){
    document.getElementById('low-usage').style.color = "green";
    document.getElementById('med-usage').style.color = "black";
    document.getElementById('high-usage').style.color = "black";
  } else if (thermostat.currentEnergyUsage == "medium-usage"){
    document.getElementById('low-usage').style.color = "black";
    document.getElementById('med-usage').style.color = "orange";
    document.getElementById('high-usage').style.color = "black";
  } else {
    document.getElementById('low-usage').style.color = "black";
    document.getElementById('med-usage').style.color = "black";
    document.getElementById('high-usage').style.color = "red";
  }
}