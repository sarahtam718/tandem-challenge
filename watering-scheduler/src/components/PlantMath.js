import React, { Component } from 'react';
import plantData from './plantData.json';
import Moment from 'react-moment';
import moment from 'moment';

// Empty global array to fill with dates to water each plant
const startDate = '2019-12-16 09';
let dateArr = [];

export default class PlantMath extends Component {
  // for each plant, how many times will we have to water during the 12 weeks?
  // we need total days of watering divided by frequency of watering (Ex. Need to see dentist every 6 months in a year, so 12 total months in a year / 6 months frequency = 2x per year)
  wateringFrequency = () => {
    // console.log(plantData);
    const numOfDays = 12 * 7;

    // for each plant...
    for (let i = 0; i < plantData.length; i++) {
      let eachPlant = plantData[i].name;
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(eachPlant, waterFreq);
      let numOfWaterings = numOfDays / Number(waterFreq);
      // console.log(numOfWaterings);

      // for each opportunity to water...
      for (let j = 0; j <= numOfWaterings; j++) {
        const wateringsNum = waterFreq * j;
        // console.log('watering in days', wateringsNum);
        // for each iteration of wateringsNum, add that number of days to startDate
        let allTheDates = moment(startDate)
          .add(`${wateringsNum}`, 'days')
          .format('dddd, MMMM Do YYYY');

        // we have start & end date, but what about weekends?
        if (allTheDates.includes('Saturday')) {
          let newDate = moment(startDate)
            .add(`${wateringsNum - 1}`, 'days')
            .format('dddd, MMMM Do YYYY');
          dateArr.push({ name: eachPlant, dateToWater: newDate });
        } else if (allTheDates.includes('Sunday')) {
          let newDate = moment(startDate)
            .add(`${wateringsNum + 1}`, 'days')
            .format('dddd, MMMM Do YYYY');
          dateArr.push({ name: eachPlant, dateToWater: newDate });
        } else {
          dateArr.push({ name: eachPlant, dateToWater: allTheDates });
        }

        // console.log('watering in calendar days??!!!', allTheDates);
      }
    }

    //console.log('dateArray', dateArr);
  };

  render() {
    this.wateringFrequency();
    return (
      <div>
        <h3>Your Last Turn to Water is</h3>
        {/* end date is March 9th */}
        <Moment add={{ weeks: 12 }}>{startDate}</Moment>
      </div>
    );
  }
}
