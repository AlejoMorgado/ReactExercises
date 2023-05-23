import React from 'react'

const HideSearchButton = ({onButtonClick}) => {
  return (
    <div>
      <button className='button' onClick={onButtonClick} >Cancel search</button>
    </div>
  )
}

export default HideSearchButton