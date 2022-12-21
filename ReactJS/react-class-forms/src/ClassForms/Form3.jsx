import { Component } from "react";

class User3 extends Component {
    constructor() {
        super()
        this.state = {
            persion: {
                username: "",
                password: "",
                emailaddress: "",
                gender: "",
                dob: "",
                height: "",
            },
            allUsers: [],
            editIndex: null,

        }
    }
    handileChange = (e) => {
        var newpersions = { ...this.state.persion }
        newpersions[e.target.name] = e.target.value
        this.setState({ persion: newpersions })
    }
    addUser = () => {
        console.log(this.state)
        var newallUsers = [...this.state.allUsers]
        newallUsers.push(this.state.persion)
        this.setState({ allUsers: newallUsers })
        this.clearForm()
        // var newAllUsers=[...this.state.allUsers]
        // newAllUsers.push(this.state.persion)
        // this.setState({allUsers:newAllUsers})
    }
    clearForm = () => {
        var newForm = {
            username: "",
            password: "",
            emailaddress: "",
            gender: "",
            dob: "",
            height: "",
        }
        this.setState({ persion: newForm })
    }
    Edituser = (val, i) => {
        this.setState({ persion: val, editIndex: i })
    }
    delUser = (val, i) => {
        var deleteUser = this.state.allUsers.filter((myval) => myval.password !== val.password)
        this.setState({ allUsers: deleteUser })
    }
    updateUser = () => {
        var UpdateallUser = [...this.state.allUsers]
        UpdateallUser[this.state.editIndex] = this.state.persion
        this.setState({ allUsers: UpdateallUser, editIndex: null })
        this.clearForm()
    }
    render() {
        return <div>
            <form>
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
    }
}
export default User3;