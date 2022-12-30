import React from 'react'
import Parent from './Parent'

const Main = ({allUsers}) => {
  return (
    <div>
      <h3>this is main component</h3>
      <Parent/>
      {/* <Parent allUsers={allUsers}/> */}
    </div>
  )
}

export default Main
