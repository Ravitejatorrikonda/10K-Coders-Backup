import React from 'react'
import Child from './Child'

const Parent = ({allUsers}) => {
  return (
    <div>
      <h3>This is a parent Compponent</h3>
      {/* <Child allUsers={allUsers}/> */}
      <Child/>
    </div>
  )
}

export default Parent
