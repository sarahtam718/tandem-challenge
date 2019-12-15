import React from 'react';

const PlantCard = props => {
  // array of dates by plant
  // console.log(props.obj.dates);

  return (
    <div>
      <h3>{props.obj.name}</h3>
      {/* something isn't right here...why is map returning a string of the entire array? */}
      {props.obj.dates.map((date, i) => (
        <div key={i}>{date}</div>
      ))}
    </div>
  );
};

export default PlantCard;
