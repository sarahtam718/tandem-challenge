import React, { Component } from 'react';
import plantData from './plantData.json';
import Moment from 'react-moment';

// Empty global array to fill with dates to water each plant
let wateringDates = [];
let timesToWater = [];
const startDate = '2019-12-16';

export default class PlantMath extends Component {
  // How many times do we need to water the plants in the next 12 weeks?
  // We need total days of watering divided by frequency of watering (Ex. Need to see dentist every 6 months in a year, so 12 total months in a year / 6 months frequency = 2x per year)
  // react-moment can provide total number of days
  // can find frequency by splitting water_after value

  // for each plant, how many times will we have to water during the 12 weeks?
  wateringFrequency = () => {
    // console.log(plantData);
    const numOfDays = 12 * 7;
    // console.log(numOfDays);
    for (let i = 0; i < plantData.length; i++) {
      let eachPlant = plantData[i].name;
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(eachPlant, waterFreq);
      let numOfWaterings = numOfDays / Number(waterFreq);
      // now we can push the name of the plant and the # of waterings
      wateringDates.push({
        eachPlant: eachPlant,
        numOfWaterings: numOfWaterings
      });
    }
    console.log(wateringDates);
  };

  render() {
    return (
      <div>
        <h3 first={this.wateringFrequency()}>Your Last Turn to Water is</h3>
        {/* end date is March 9th */}
        <Moment add={{ weeks: 12 }}>{startDate}</Moment>
      </div>
    );
  }
}
