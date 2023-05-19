import React from 'react'

const Contact = ({href, target, content}) => {
  return (
    <div>
    <a href={href} target={target}> {content} </a>
  </div>
  )
}

export default Contact;