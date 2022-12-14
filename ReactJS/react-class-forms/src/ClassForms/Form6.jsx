import React, { Component } from 'react';

class User6 extends Component {
    constructor() {
        super()
        this.state = {
            persion: {
                fname: "",
                lname: "",
                dob: "",
                emailid: "",
                mobilenumber: "",
            },
            allUsers:[],
            editIndex:null,
        }
    }
    handleChange=(e)=>{
        var newpersions={...this.state.persion}
        newpersions[e.target.name]=e.target.value
        this.setState({persion:newpersions})
    }
    addUser=()=>{
      console.log(this.state)
      var newallUsers=[...this.state.allUsers]
      newallUsers.push(this.state.persion)
      this.setState({allUsers:newallUsers})
      this.clearForm()
    }
    clearForm=()=>{
        var newForm={
            fname: "",
            lname: "",
            dob: "",
            emailid: "",
            mobilenumber: "",
        }
        this.setState({persion:newForm})
    }
    editUser=(val,i)=>{
        this.setState({persion:val,editIndex:i})
    }
    delUser=(val)=>{
        var deleteUsers=this.state.allUsers.filter((myval)=>myval.emailid !== val.emailid)
        this.setState({allUsers:deleteUsers})
    }
    updateUser=()=>{
        var updateallUser=[...this.state.allUsers]
        updateallUser[this.state.editIndex]=this.state.persion
        this.setState({allUsers:updateallUser,editIndex:null})
        this.clearForm()
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor=''>First Name : </label>
                    <input type="text" name='fname' value={this.state.persion.fname} onChange={(e) => { this.handleChange(e) }}/><br />
                    <label htmlFor=''>Last Name : </label>
                    <input type="text" name='lname' value={this.state.persion.lname} onChange={(e) => { this.handleChange(e) }}/><br />
                    <label htmlFor=''>Date of Birth : </label>
                    <input type="number" name='dob' value={this.state.persion.dob} onChange={(e) => { this.handleChange(e) }} /><br/>
                    <label htmlFor=''>Email Id : </label>
                    <input type="email" name='emailid' value={this.state.persion.emailid} onChange={(e) => { this.handleChange(e) }} /><br/>
                    <label htmlFor=''>Mobile Number : </label>
                    <input type="number" name='mobilenumber' value={this.state.persion.mobilenumber} onChange={(e) => { this.handleChange(e) }} /><br/>
                    {this.state.editIndex !== null ? <button type='button' className='btn btn-info' onClick={this.updateUser}>Update User</button> :
                    <button type='button' className='btn btn-success' onClick={this.addUser}>Add User</button> }
                    {/* <button type='button' className='btn btn-success' onClick={this.addUser}>Add User</button> */}
                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>DateofBirth</th>
                            <th>EmailId </th>
                            <th>MobileNumber</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((val,i)=>
                        <tr key={i}>
                        <td>{val.fname}</td>
                        <td>{val.lname}</td>
                        <td>{val.dob}</td>
                        <td>{val.emailid}</td>
                        <td>{val.mobilenumber}</td>
                        <td>
                            <button type='button' className='btn btn-warning' onClick={()=>{this.editUser(val,i)}}>Edit</button>
                        </td>
                        <td>
                         <button type='button' className='btn btn-danger' onClick={()=>{this.delUser(val,i)}}>Delete</button> 
                        </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User6;
