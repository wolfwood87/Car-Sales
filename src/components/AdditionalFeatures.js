import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useDispatch, useSelector} from 'react-redux';
import { addItem } from '../actions'
const AdditionalFeatures = () => {
  const carFeat = useSelector(state => state.additionalFeatures);
  const dispatch = useDispatch();
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {carFeat.length ? (
        <ol type="1">
          {carFeat.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={(item)=> dispatch(addItem(item))} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



export default AdditionalFeatures;
