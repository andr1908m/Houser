import React from 'react';
import FA from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Benefit = (props) => {
  const iconArray = props.iconName.split(" ")

  return (
    <div className="benefit">
      <div className="container">
        <FA icon={[...iconArray]} className="icon"/>
        <h5>{props.title}</h5>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

Benefit.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string, 
  children: PropTypes.string
}

Benefit.defaultProps = {
  iconName: [],
  children: []
}

export default Benefit;
