import React from 'react'

const Style = ({href, target, content}) => {
  return (
    <div>
    <a href={href} target={target}> {content} </a>
  </div>
  )
}

export default Style