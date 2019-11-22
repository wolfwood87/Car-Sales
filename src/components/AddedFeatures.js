import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions'
const AddedFeatures = () => {
  const addFeat = useSelector(state => state.car.features);
  const dispatch = useDispatch();
  return (
    <div className="content">
      <h6>Added features:</h6>
      {addFeat.length ? (
        <ol type="1">
          {addFeat.map((item, index) => (
            <AddedFeature key={index} feature={item} removeFeature={(item)=> dispatch(removeFeature(item))}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};



export default AddedFeatures;