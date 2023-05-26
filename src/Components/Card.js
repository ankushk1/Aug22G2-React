import React from 'react'
import Avatar from './Avatar'


const Card = ({children}) => {
  console.log(children)
  return (
    <div>
      This is Card Component
        {/* {children} */}
        <Avatar/>
    </div>
  )
}

export default Card