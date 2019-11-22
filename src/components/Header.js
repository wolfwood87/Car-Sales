import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carHead.image} alt={props.carHead.name} />
      </figure>
      <h2>{props.carHead.name}</h2>
      <p>Amount: ${props.carHead.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    carHead: state.car
  };
};

export default connect(
  mapStateToProps,
  {}
 )(Header);