import React from 'react'
import GrandChild from './GrandChild'

const Child = ({allUsers}) => {
  return (
    <div>
      <h3>this is a child component</h3>
      {/* <GrandChild allUsers={allUsers}/> */}
      <GrandChild/>
    </div>
  )
}

export default Child
