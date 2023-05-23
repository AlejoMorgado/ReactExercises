import React from 'react'

const SearchButton = ({onButtonClick}) => {
  return (
    <div>
      <button className='button' onClick={onButtonClick}>Search</button>
    </div>
  )
}

export default SearchButton