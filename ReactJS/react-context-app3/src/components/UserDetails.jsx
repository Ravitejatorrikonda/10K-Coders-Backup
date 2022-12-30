import React from 'react'
import { MyContextConsumer } from './Mycontext'


const UserDetails = ({ allUsers }) => {
    return (
        <div>
            <h3>this is a UserDetails component</h3>
            {/* <ul>
                {allUsers.map((val, i) =>
                    <li key={i}>{val}</li>
                )}
            </ul> */}
           <MyContextConsumer>
            {(UserInfo)=>(
                <ul>
                    {UserInfo.map((val,i)=>
                    <li key={i}>{val}</li>
                    )}
                </ul>
            )}
         
           </MyContextConsumer>
          

        </div>
    )
}

export default UserDetails
