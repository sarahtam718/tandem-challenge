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

  wateringFrequency = () => {
    // console.log(plantData);
    for (let i = 0; i < plantData.length; i++) {
      let eachPlant = plantData[i].name;
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(eachPlant, waterFreq);
      let numFreq = Number(waterFreq);
      // now we can push the name of the plant and the frequency in number format
      wateringDates.push({ eachPlant: eachPlant, waterFreq: numFreq });
    }
    // console.log(wateringDates);
  };

  // for each plant, how many times will we have to water during the 12 weeks?
  howManyWaterings = () => {
    // total # of days in 12 weeks
    let numOfDays = 12 * 7;
    //console.log(numOfDays);
    // for each plant, divide # of days / water_after frequency to find # of waterings
    for (let i = 0; i < wateringDates.length; i++) {
      const numOfWaterings = numOfDays / wateringDates[i].waterFreq;
      timesToWater.push({
        plant: wateringDates[i].eachPlant,
        numOfWaterings: numOfWaterings
      });
    }
    console.log(timesToWater);
  };

  render() {
    return (
      <div>
        <h3 first={this.wateringFrequency()} run={this.howManyWaterings()}>
          Your Last Turn to Water is
        </h3>
        {/* end date is March 9th */}
        <Moment add={{ weeks: 12 }}>{startDate}</Moment>
      </div>
    );
  }
}
