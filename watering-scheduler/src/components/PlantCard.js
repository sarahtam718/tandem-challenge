import React from 'react';

const PlantCard = props => {
  console.log(props.obj.dates);
  return (
    <div>
      <h3>{props.obj.name}</h3>
      {props.obj.dates.map((date, i) => (
        <div className='date-list'>
          <ul key={i}>{date}</ul>
        </div>
      ))}
    </div>
  );
};

export default PlantCard;
