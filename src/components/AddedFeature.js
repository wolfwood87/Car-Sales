import React from 'react';

const AddedFeature = props => {

  const removeItem = (e) => {
    e.preventDefault();
    console.log(props.feature);
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeItem}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
