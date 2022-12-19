import axios from 'axios';
import React, { Component } from 'react';

class ServerForm4 extends Component {
    constructor() {
        super()
        this.state = {
            allUsers: [],

            persions: {
                id: "",
                street: "",
                city: "",
                State1: "",
                zipcode: "",
                country: "",
            },
            editIndex:null,

        }
    }
    handleChange = (e) => {
        var newAllUSers = { ...this.state.persions }
        newAllUSers[e.target.name] = e.target.value
        this.setState({ persions: newAllUSers })
    }
    addUser = () => {
        axios({
            method: "post",
            url: "http://localhost:3005/form4/",
            data: this.state.persions,
            headers: { "Content-Type": "application/json" }
        })
        var newallpersions = [...this.state.allUsers]
        newallpersions.push(this.state.persions)
        this.setState({ allUSers: newallpersions })
        this.clearForm()
    }
    clearForm = () => {
        var allForm = {
            id: "",
            street: "",
            city: "",
            State1: "",
            zipcode: "",
            country: "",
        }
        this.setState({allUSers:allForm})
    }
    delUser = (val, i) => {
        var newDel = i + 1
        axios.delete("http://localhost:3005/form4/" + newDel).then((res) => {
            this.componentDidMount()
        })
    }
    editUser=(val,i)=>{
        this.setState({persions:val,editIndex:i})
    }
    updateUser=()=>{
        var newupdate=this.state.editIndex+1
        axios({
            method:"put",
            url:"http://localhost:3005/form4/"+newupdate,
            data:this.state.persions
        })
        var newAllUpdate=[...this.state.allUsers]
        newAllUpdate[this.state.editIndex]=this.state.persions
        this.setState({allUSers:newAllUpdate,editIndex:null})
        this.clearForm()
    }


    render() {
        return (
            <div>
                <form>
                    <label>ID : </label>
                    <input type="text" name="id" value={this.state.persions.id} onChange={(e) => { this.handleChange(e) }} disabled /><br />
                    <label>Street : </label>
                    <input type="text" name="street" value={this.state.persions.street} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label>city,State1 : </label>
                    <input type="text" name="city" value={this.state.persions.city} onChange={(e) => { this.handleChange(e) }} />&nbsp;
                    <input type="text" name="State1" value={this.state.persions.State1} onChange={(e) => { this.handleChange(e) }} style={{ width: "30px" }} /><br />
                    <label>Zipcode : </label>
                    <input type="text" name="zipcode" value={this.state.persions.zipcode} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label>country : </label>
                    <input type="text" name="country" value={this.state.persions.country} onChange={(e) => { this.handleChange(e) }} /><br />

                    {this.state.editIndex !==null ? <button type='button' onClick={this.updateUser} className="btn btn-info">UpdateUSer</button> 
                    : <button type='button' onClick={this.addUser} className="btn btn-secondary">addUser</button>}



                    {/* <button type='button' onClick={this.addUser} className="btn btn-secondary">addUser</button> */}
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th >Street</th>
                            <th >City</th>
                            <th >State</th>
                            <th >Zipcode</th>
                            <th >country</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((val, i) =>
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.street}</td>
                                <td>{val.city}</td>
                                <td>{val.State1}</td>
                                <td>{val.zipcode}</td>
                                <td>{val.country}</td>
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
        var newUser = await axios("http://localhost:3005/form4/")
        console.log(newUser);
        this.setState({ allUsers: newUser.data })

    }
}

export default ServerForm4;
