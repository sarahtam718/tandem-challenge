import React, { Component } from 'react';
import plantData from './plantData.json';
import Moment from 'react-moment';

// Empty global array to fill with dates to water each plant
let wateringDates = [];
const startDate = '2019-12-16';

export default class PlantMath extends Component {
  // for each plant, how many times will we have to water during the 12 weeks?
  // we need total days of watering divided by frequency of watering (Ex. Need to see dentist every 6 months in a year, so 12 total months in a year / 6 months frequency = 2x per year)
  wateringFrequency = () => {
    // console.log(plantData);
    const numOfDays = 12 * 7;
    // console.log(numOfDays);
    for (let i = 0; i < 1; i++) {
      let eachPlant = plantData[i].name;
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(eachPlant, waterFreq);
      let numOfWaterings = numOfDays / Number(waterFreq);
      console.log(numOfWaterings);
      for (let j = 0; j < numOfWaterings; j++) {
        console.log(
          eachPlant,
          'says water me! My frequency is',
          waterFreq,
          'days'
        );
      }
      // --------------------------------------
      //   for (let i = 0; i < plantData.length; i++) {
      //     let eachPlant = plantData[i].name;
      //     let waterFreq = plantData[i].water_after.split(' ')[0];
      //     //console.log(eachPlant, waterFreq);
      //     let numOfWaterings = numOfDays / Number(waterFreq);
      //     console.log(numOfWaterings);
      //     for (let j = 0; j < numOfWaterings; j++) {
      //       console.log(eachPlant, 'water me!');
      //     }
      // -------------------------------
      //   console.log(numOfWaterings);
      //   for (let j = 0; j < numOfWaterings; j++) {
      //     console.log(eachPlant, 'water me!');
      //   }

      // now we can push the name of the plant and the # of waterings
      //   wateringDates.push({
      //     eachPlant: eachPlant,
      //     numOfWaterings: numOfWaterings
      //   });

      //   let something = wateringDates[i].numOfWaterings;
    }

    // for (let k = 0; k < wateringDates.length; k++) {
    //   console.log(wateringDates[k].eachPlant, something);
    // }
    // console.log(wateringDates);
  };

  // What are the specific dates for these waterings?
  //   waterMeOn = () => {
  //     for (let i = 0; i < wateringDates.length; i++) {
  //       console.log(wateringDates[i].numOfWaterings);
  //       console.log(plantData);
  //     }
  //   };

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
