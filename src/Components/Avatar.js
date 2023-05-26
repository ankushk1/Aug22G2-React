import React from 'react'

const Avatar = (props) => {

  const{setDataFromChild} = props;
  
  console.log(props)
  return (
    <div>Avatar Component
      <div>
        <button
          onClick={() => {
            setDataFromChild("Data from Child")
          }}
        >Pass Data</button>
      </div>

    </div>
  )
}

export default Avatar