import React from 'react'

const WebSite = ({href, target, content}) => {
  return (
    <div>
    <a href={href} target={target}> {content} </a>
  </div>
  )
}

export default WebSite;