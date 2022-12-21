import React, { useState } from 'react';

const User6 = () => {
    const [persion, setpersion] = useState(initialState);
    return (
        <div>
             <form>
                <label htmlFor=''>ID: </label>
                    <input type="number" name='id' value={persion.id} onChange={(e) => { handleChange(e) }} disabled/><br />
                    <label htmlFor=''>First Name : </label>
                    <input type="text" name='fname' value={persion.fname} onChange={(e) => { handleChange(e) }} /><br />
                    <label htmlFor=''>Last Name : </label>
                    <input type="text" name='lname' value={persion.lname} onChange={(e) => { handleChange(e) }} /><br />
                    <label htmlFor=''>Date of Birth : </label>
                    <input type="number" name='dob' value={persion.dob} onChange={(e) => { handleChange(e) }} /><br />
                    <label htmlFor=''>Email Id : </label>
                    <input type="email" name='emailid' value={persion.emailid} onChange={(e) => { handleChange(e) }} /><br />
                    <label htmlFor=''>Mobile Number : </label>
                    <input type="number" name='mobilenumber' value={persion.mobilenumber} onChange={(e) => { handleChange(e) }} /><br />
                    {/* {editIndex !== null ? <button type='button' className='btn btn-info' onClick={updateUser}>Update User</button> :
                        <button type='button' className='btn btn-success' onClick={addUser}>Add User</button>} */}

                    <button type='button' className='btn btn-success' onClick={addUser}>Add User</button>

                </form>
        </div>
    );
}

export default User6;
