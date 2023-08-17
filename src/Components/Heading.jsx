import React from 'react'
import './style.css'

const Heading = ({ children }) => {
  return (
    <h1 className='heading'>{children}</h1>
  )
}

const SubHeading = ({ children }) => {
  return (
    <h6 className='subheading'>{children}</h6>
  )
}

export { Heading, SubHeading };
