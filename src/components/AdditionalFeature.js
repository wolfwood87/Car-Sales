import React from 'react';

const AdditionalFeature = props => {
  
  const buyItem = (e) => {
    // dipsatch an action here to add an item
    e.preventDefault();
    console.log(props.feature)
    props.addItem(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
