import React, { Component } from 'react';
import plantData from './plantData.json';
import Moment from 'react-moment';

// Empty global array to fill with dates to water each plant
const startDate = '2019-12-16';
let dateArr = [];

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
      // console.log(numOfWaterings);
      for (let j = 0; j <= numOfWaterings; j++) {
        let someNum = waterFreq * j;
        // console.log(someNum);
        dateArr.push({ name: eachPlant, date: someNum });
      }
      console.log('dateArray', dateArr);
    }
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
