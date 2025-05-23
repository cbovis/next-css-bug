import React from 'react'
import './Component.scss'
import Link from 'next/link'

const Component = ({headline, showLink = false}) => {
  return (
    <div className="Component">
      <h1>{headline}</h1>
      {showLink && <><br /><Link href='/not-found'>Go to 404 (not-found.js)</Link></>}
    </div>
  )
}

export default Component