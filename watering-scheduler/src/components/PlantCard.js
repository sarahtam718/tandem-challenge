import React from 'react';

const PlantCard = props => {
  return (
    <div>
      <h3>{props.obj.name}</h3>
      <p>map over dates</p>
    </div>
  );
};

export default PlantCard;
