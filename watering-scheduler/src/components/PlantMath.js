import React, { Component } from 'react';
import plantData from './plantData.json';
import moment from 'moment';

// <future dev> the start date could definitely be dynamically pulled from a form
const startDate = '2019-12-16 09';
// Empty array to store with the plant name & dates to water each plant
let plantArr = [];

export default class PlantMath extends Component {
  // this lifecycle method solve my issue of wanting to run my function right away, but definitely need to investigate a better solution
  componentWillMount = () => {
    this.wateringFrequency();
    //  this.mapTry();
  };

  // for each plant, how many times will a Tandelorian have to water during the 12 weeks?
  wateringFrequency = () => {
    // console.log(plantData);
    const numOfDays = 12 * 7;

    // for each plant...
    for (let i = 0; i < plantData.length; i++) {
      // separate plan name to keep things simple
      let name = plantData[i].name;
      // get rid of "days" so we just have the number
      let waterFreq = plantData[i].water_after.split(' ')[0];
      //console.log(name, waterFreq);
      // take the total number of days to water and divide by the frequency
      let numOfWaterings = numOfDays / waterFreq;
      let datesArr = [];

      // for each opportunity to water...
      for (let j = 0; j <= numOfWaterings; j++) {
        const wateringsNum = waterFreq * j;
        // console.log('watering in days', wateringsNum);
        // for each iteration of wateringsNum, add that number of days to startDate
        let dateToWater = moment(startDate)
          .add(`${wateringsNum}`, 'days')
          .format('dddd, MMMM Do YYYY; ');
        // console.log(name, dateToWater);
        // datesArr.push(dateToWater);

        //  we have start & end date, but what about weekends?
        if (dateToWater.includes('Saturday')) {
          let newDate = moment(startDate)
            .add(`${wateringsNum - 1}`, 'days')
            .format('dddd, MMMM Do YYYY; ');
          datesArr.push(newDate);
        } else if (dateToWater.includes('Sunday')) {
          let newDate = moment(startDate)
            .add(`${wateringsNum + 1}`, 'days')
            .format('dddd, MMMM Do YYYY; ');
          datesArr.push(newDate);
        } else {
          datesArr.push(dateToWater);
        }
      }
      // console.log(datesArr);
      // pushing an object with the plant name and dates for watering together
      plantArr.push({ name: name, dates: [datesArr] });
    }
    //  console.log('plantArray', plantArr);
  };

  // problem-solving my mapping issue in render below...
  // mapTry = () => {
  //   plantArr.map((plant, index) => {
  //     console.log(plant.name);
  //   });
  // };

  render() {
    return (
      <div className='plant-container'>
        {plantArr.map(({ name, dates }, j) => {
          return (
            <div className='plant-card'>
              <h1 key={j}>{name}</h1>
              {/* this map function is treating the entire array as one value instead of elements in an array - continue investigating how to fix this */}
              <div className='dates-list'>
                {dates.map((d, i) => {
                  return <ul key={i}>{d}</ul>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
