import axios from 'axios';
import React, { Component } from 'react';

class ServerForm2 extends Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],
            persion: {
                id: "",
                username: "",
                password: "",
                emailaddress: "",
                gender: "",
                dob: "",
                height: "",
            },
            editIndex:null
        }
    }
    handileChange = (e) => {
        var newpersions = { ...this.state.persion }
        newpersions[e.target.name] = e.target.value
        this.setState({ persion: newpersions })
    }
    addUser = () => {
        axios({
            method: "post",
            url: "http://localhost:3005/form2",
            data: this.state.persion,
            headers: { "Content-Type": "application/json" }
        })
        var newallUser = [...this.state.allUsers]
        newallUser.push(this.state.persion)
        this.setState({ allUsers: newallUser })
        this.clearForm()
    }
    clearForm = () => {
        var newForm = {
            id:"",
            username: "",
            password: "",
            emailaddress: "",
            gender: "",
            dob: "",
            height: "",
        }
        this.setState({ persion: newForm })
    }
    delUser=(usr,i)=>{
        var newDel=i+1
        console.log(newDel);
        axios.delete("http://localhost:3005/form2/"+newDel).then((res)=>{
            this.componentDidMount()
        })


    }
    Edituser=(val,i)=>{
        this.setState({persion:val,editIndex:i})
    }
    updateUser=()=>{
        var newUpdate=this.state.editIndex+1
        axios({
            method:"put",
            url:"http://localhost:3005/form2/"+newUpdate,
            data:this.state.persion,
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
                    <label htmlFor="">Id : </label>
                    <input type="text" name="id" value={this.state.persion.id} onChange={(e) => { this.handileChange(e) }} disabled /><br />
                    <label htmlFor="">UserName : </label>
                    <input type="text" name="username" value={this.state.persion.username} onChange={(e) => { this.handileChange(e) }} /><br />
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" value={this.state.persion.password} onChange={(e) => { this.handileChange(e) }} /><br />
                    <label htmlFor="">Emailaddress : </label>
                    <input type="email" name="emailaddress" value={this.state.persion.emailaddress} onChange={(e) => { this.handileChange(e) }} /><br />
                    <select name="gender" value={this.state.persion.gender} onChange={(e) => { this.handileChange(e) }}>
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select><br />
                    <label htmlFor="">Date : </label>
                    <input type="date" name="dob" value={this.state.persion.dob} onChange={(e) => { this.handileChange(e) }} /><br />
                    <label htmlFor="">Height : </label>
                    <input type="number" name="height" value={this.state.persion.height} onChange={(e) => { this.handileChange(e) }} /><br />
                    {this.state.editIndex !== null ? (<button type="button" className=" btn btn-primary" onClick={this.updateUser}>UpdateUser</button>
                ) : (
                    <button type="button" className="btn btn-secondary" onClick={this.addUser}>AddUser</button>)}

                    {/* <button type="button" onClick={this.addUser}>AddUser</button> */}

                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th >username</th>
                            <th >password</th>
                            <th >Emailaddress</th>
                            <th >gender</th>
                            <th >DOB</th>
                            <th >height</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((val, i) =>
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td>{val.emailaddress}</td>
                                <td>{val.gender}</td>
                                <td>{val.dob}</td>
                                <td>{val.height}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => { this.Edituser(val, i) }}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => { this.delUser(val, i) }}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    async componentDidMount() {
        let newUser = await axios.get("http://localhost:3005/form2")
        console.log(newUser);
        this.setState({ allUsers: newUser.data })

    }
}

export default ServerForm2;
