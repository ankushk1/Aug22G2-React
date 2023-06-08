import React, { useContext } from 'react'
import { messageContext } from '../../App'

const ComponentB = () => {

  const message = useContext(messageContext)
  console.log(message)
  return (
    <div>ComponentB 
      <div>
          {/* <messageContext.Consumer>
            {(message) => {
              return <p>{message.message}</p>
            }}
          </messageContext.Consumer> */}
          <p>{message.text}</p>
      </div>

    </div>
  )
}

export default ComponentB