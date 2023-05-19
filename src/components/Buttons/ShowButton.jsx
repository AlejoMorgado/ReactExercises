import React from 'react';
import '../../styles/buttons.css'
const ShowButton = ({ onButtonClick }) => {
  return (
    <div>
      <h3>Let's start</h3>
      <button className='button'  onClick={onButtonClick}>Display sneakers</button>
    </div>
  );
};

export default ShowButton;
