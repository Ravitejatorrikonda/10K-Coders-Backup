import axios from 'axios';
import React, { Component } from 'react';

class ServerForm5 extends Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],
            persion: {
                id: "",
                fname: "",
                lname: "",
                dob: "",
                emailid: "",
                mobilenumber: "",
            },
            editIndex:null
        }
    }
    handleChange=(e)=>{
        var newpersion={...this.state.persion}
        newpersion[e.target.name]=e.target.value
        this.setState({persion:newpersion})
    }
    addUser=()=>{
        axios({
            method:"post",
            url:"http://localhost:3005/form5/",
            data:this.state.persion,
            headers: { "Content-Type": "application/json" }
        })
        var newallUsers=[...this.state.allUsers]
        newallUsers.push(this.state.persion)
        this.setState({allUsers:newallUsers})
        this.clearForm()
    }
    clearForm=()=>{
        var newForm={
            id: "",
            fname: "",
            lname: "",
            dob: "",
            emailid: "",
            mobilenumber: "",
        }
        this.setState({persion:newForm})
    }
    delUser=(val,i)=>{
             var newDel=i+1
             axios.delete("http://localhost:3005/form5/"+newDel).then((res)=>{
                this.componentDidMount()
             })
    }

editUser=(val,i)=>{
    this.setState({persion:val,editIndex:i})
}
updateUser=(val,i)=>{
    var newUpdate=this.state.editIndex+1
    axios({
        method:"put",
        url:"http://localhost:3005/form5/"+newUpdate,
        data:this.state.persion
    })
    var newallUpdate=[...this.state.allUsers]
    newallUpdate[this.state.editIndex]=this.state.persion
    this.setState({allUsers:newallUpdate,editIndex:null})
    this.clearForm()
}
    render() {
        return (
            <div>
                <form>
                <label htmlFor=''>ID: </label>
                    <input type="number" name='id' value={this.state.persion.id} onChange={(e) => { this.handleChange(e) }} disabled/><br />
                    <label htmlFor=''>First Name : </label>
                    <input type="text" name='fname' value={this.state.persion.fname} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor=''>Last Name : </label>
                    <input type="text" name='lname' value={this.state.persion.lname} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor=''>Date of Birth : </label>
                    <input type="number" name='dob' value={this.state.persion.dob} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor=''>Email Id : </label>
                    <input type="email" name='emailid' value={this.state.persion.emailid} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor=''>Mobile Number : </label>
                    <input type="number" name='mobilenumber' value={this.state.persion.mobilenumber} onChange={(e) => { this.handleChange(e) }} /><br />
                    {this.state.editIndex !== null ? <button type='button' className='btn btn-info' onClick={this.updateUser}>Update User</button> :
                        <button type='button' className='btn btn-success' onClick={this.addUser}>Add User</button>}

                    {/* <button type='button' className='btn btn-success' onClick={this.addUser}>Add User</button> */}

                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
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
                        {this.state.allUsers.map((val, i) =>
                            <tr key={i}>
                                
                                <td>{val.id}</td>
                                <td>{val.fname}</td>
                                <td>{val.lname}</td>
                                <td>{val.dob}</td>
                                <td>{val.emailid}</td>
                                <td>{val.mobilenumber}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => { this.editUser(val, i) }}>Edit</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => { this.delUser(val, i) }}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    async componentDidMount() {
        let newUSer = await axios.get("http://localhost:3005/form5/")
            console.log(newUSer);
            this.setState({allUsers:newUSer.data})
        
    }
}

export default ServerForm5;
