import React, { Component } from 'react';
import plantData from './plantData.json';

// Empty global array to fill with dates to water each plant
let wateringDates = [];

export default class PlantMath extends Component {
  // How many times do we need to water the plants in the next 12 weeks?
  // We need total days of watering divided by frequency of watering (Ex. Need to see dentist every 6 months in a year, so 12 total months in a year / 6 months frequency = 2x per year)
  // react-moment can provide total number of days, but I'll use a placeholder for now
  // can find frequency by splitting water_after value

  wateringFrequency = () => {
    // console.log(plantData);
    for (let i = 0; i < plantData.length; i++) {
      let eachPlant = plantData[i].name;
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(eachPlant, waterFreq);
      //wateringDates.push(eachPlant, waterFreq);
      wateringDates.push({ eachPlant: eachPlant, waterFreq: waterFreq });
    }
    console.log(wateringDates);
  };

  render() {
    return (
      <div>
        <h1 run={this.wateringFrequency()}>Watering Scheduler</h1>
      </div>
    );
  }
}
