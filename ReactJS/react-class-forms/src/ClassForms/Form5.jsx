import React, { Component } from 'react';

class User5 extends Component {
    constructor() {
        super()
        this.state = {
            persions: {
                street: "",
                city: "",
                State1: "",
                zipcode: "",
                country: "",
            },
            allUSers: [],
            editindex: null,
        }
    }
    handleChange = (e) => {
        var newpersions = { ...this.state.persions }
        newpersions[e.target.name] = e.target.value
        this.setState({ persions: newpersions })
    }
    addUser = () => {
        console.log(this.state)
        var newallUsers = [...this.state.allUSers]
        newallUsers.push(this.state.persions)
        this.setState({ allUSers: newallUsers })
        this.clearform()
    }
    clearform = () => {
        var newForm = {
            street: "",
            city: "",
            State1: "",
            zipcode: "",
            country: "",
        }
        this.setState({ persions: newForm })
    }
    editUser = (val, i) => {


        this.setState({ persions: val, editindex: i })
       
    }
    delUser = (val) => {
        var deleteUSer = this.state.allUSers.filter((myval) => myval.country !== val.country)

        this.setState({ allUSers: deleteUSer })
    }


    // updateUser=()=>{
    //     var updateallUsers=[...this.state.allUSers]
    //     updateallUsers[this.state.editindex]=this.state.persions
    //     this.setState({allUSers:updateallUsers,editindex:null})
    //     this.clearform()
    // }
    updateUser=()=>{
        var updateAllUser=[...this.state.allUSers]
        updateAllUser[this.state.editindex]=this.state.persions
        this.setState({allUSers:updateAllUser,editindex:null})
        this.clearform()
    }

    render() {
        return (
            <div>
                <form>
                    <label>Street : </label>
                    <input type="text" name="street" value={this.state.persions.street} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label>city,State1 : </label>
                    <input type="text" name="city" value={this.state.persions.city} onChange={(e) => { this.handleChange(e) }} />&nbsp;
                    <input type="text" name="State1" value={this.state.persions.State1} onChange={(e) => { this.handleChange(e) }} style={{ width: "30px" }} /><br />
                    <label>Zipcode : </label>
                    <input type="text" name="zipcode" value={this.state.persions.zipcode} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label>country : </label>
                    <input type="text" name="country" value={this.state.persions.country} onChange={(e) => { this.handleChange(e) }} /><br />
                    {/* {this.State.editindex !== null ? (<button type='button' className='btn btn-primary' onClick={this.updateUser}>UpdateUser</button>
                    ) : (
                        <button type='button' onClick={this.addUser} className="btn btn-primary">addUser</button>
                    )} */}
                    {this.state.editindex !==null ? <button type='button' onClick={this.updateUser} className="btn btn-info">UpdateUSer</button> 
                    : <button type='button' onClick={this.addUser} className="btn btn-secondary">addUser</button>}



                    {/* <button type='button' onClick={this.addUser} className="btn btn-secondary">addUser</button> */}
                </form>
                <table className="table">
                    <thead>
                        <tr>
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
                        {this.state.allUSers.map((val, i) =>
                            <tr key={i}>
                                <td>{val.street}</td>
                                <td>{val.city}</td>
                                <td>{val.State1}</td>
                                <td>{val.zipcode}</td>
                                <td>{val.country}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => {this.editUser(val, i) }}>Edit</button>
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
}

export default User5;
