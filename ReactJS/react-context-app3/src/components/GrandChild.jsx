import React from 'react'
import UserDetails from './UserDetails'

const GrandChild = ({allUsers}) => {
  return (
    <div>
      <h3>this is a GrandChild component</h3>
      {/* <UserDetails allUsers={allUsers}/> */}
      <UserDetails/>
    </div>
  )
}

export default GrandChild
