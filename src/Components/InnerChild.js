import React from 'react'

const InnerChild = (props) => {
  console.log('in Inner Child', props)
  return (
    <div>InnerChild</div>
  )
}

export default InnerChild