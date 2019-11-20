import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions'
const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.addFeat.length ? (
        <ol type="1">
          {props.addFeat.map((item, index) => (
            <AddedFeature key={index} feature={item} removeFeature={props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addFeat: state.car.features
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
 )(AddedFeatures);