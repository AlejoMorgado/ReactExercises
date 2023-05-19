import React from 'react'

const Twitter = ({href,target,content}) => {
  return (
    <div>
    <a href={href} target={target}> {content} </a>
  </div>
  )
}

export default Twitter