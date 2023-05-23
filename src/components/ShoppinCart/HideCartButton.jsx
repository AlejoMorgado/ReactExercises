import React from 'react'

const HideCartButton = ({onButtonClick, content}) => {
  return (
    <div>
      <button className='button' onClick={onButtonClick}>{content}</button>
    </div>
  );
}

export default HideCartButton;