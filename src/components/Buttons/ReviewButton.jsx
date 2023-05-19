import React from 'react'
import '../../styles/buttons.css'
const ReviewButton = ({onButtonClick, content}) => {
  return (
    <div>
      <button className='button'  onClick={onButtonClick}>{content}</button>
    </div>
  )
}
export default ReviewButton