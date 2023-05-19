import React from 'react'

const Instagram = ({ href, target, content}) => {
  return (
    <div>
      <a href={href} target={target}> {content}</a>
    </div>
  )
}

export default Instagram