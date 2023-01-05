import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handileadd } from '..';

 class User extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addnewUser}>add USer</button>
        {/* <button onClick={handiledele}>delete User</button> */}
      </div>
    )
  }
}
  function mapStatetoProps(state) {
    console.log(state);
    return{
        users:state.users
    }
  
}
function mapDispatchToProps(dispatch){
    return{
        addnewUser:()=>{
            dispatch(handileadd())
        }
    }
}
//  console.log(connect);
export default connect(mapStatetoProps,mapDispatchToProps)(User)
