import { Component } from "react";

class User2 extends Component {
    constructor() {
        super()
        this.state = {
            persion: {
                name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                message: "",
            },
            allUsers: [],
            editIndex: null
        }
    }
    handleChange = (e) => {
        var newPersion = { ...this.state.persion }
        newPersion[e.target.name] = e.target.value
        this.setState({ persion: newPersion })
    }
    addUser = () => {
        console.log(this.state.persion)
        var newAllUsers = [...this.state.allUsers]
        newAllUsers.push(this.state.persion)
        this.setState({ allUsers: newAllUsers })
        this.clearform()
    }
    clearform = () => {
        var newForm = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
        };
        this.setState({ persion: newForm })
    };
    ediUser = (val, i) => {
        this.setState({ persion: val, editIndex: i })
    }
    deleteUser = (val) => {
        var delAllUsers = this.state.allUsers.filter((myval) => myval.email !== val.email)
        this.setState({ allUsers: delAllUsers })
    }
    updateUser=()=>{
        var latestusers=[...this.state.allUsers]
        latestusers[this.state.editIndex]=this.state.persion
        this.setState({allUsers:latestusers,editIndex:null})
    }

    render() {
        return <div>
            <form>
                <label> Name : </label>
                <input type="text" name="name" value={this.state.persion.name} onChange={(e) => { this.handleChange(e) }} /><br />
                <label> UserName : </label>
                <input type="text" name="username" value={this.state.persion.username} onChange={(e) => { this.handleChange(e) }} /><br />
                <label> Email : </label>
                <input type="email" name="email" value={this.state.persion.email} onChange={(e) => { this.handleChange(e) }} /><br />
                <label> Password : </label>
                <input type="password" name="password" value={this.state.persion.password} onChange={(e) => { this.handleChange(e) }} /><br />
                <label> ConfirmPassword : </label>
                <input type="confirmPassword" name="confirmPassword" value={this.state.persion.confirmPassword} onChange={(e) => { this.handleChange(e) }} /><br />
                <label> Message : </label>
                <input type="message" name="message" value={this.state.persion.message} onChange={(e) => { this.handleChange(e) }} /><br />
                {this.state.editIndex !== null ? (<button onClick={this.updateUser} className="btn btn-primary">updateUser</button>
                ) : (
                <button type="button" onClick={this.addUser} >AddUser</button>)}

                {/* <button type="button" onClick={this.addUser} >AddUser</button> */}

            </form>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">ConfirmPassword</th>
                        <th scope="col">Message</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.allUsers.map((val, i) =>
                        <tr key={i}>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.confirmPassword}</td>
                            <td>{val.message}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => { this.ediUser(val, i) }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { this.deleteUser(val) }}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    }
}
export default User2