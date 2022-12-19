import React, { Component } from 'react';
import axios from 'axios'

class Form1 extends Component {
    constructor(){
        super()
        this.state={
            persion: {
                id:"",
                name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                message: "",
            },
           allUsers:[],
           editIndex:null
           
        }
    }
    handleChange=(e)=>{
        var newpersion={...this.state.persion}
        newpersion[e.target.name]=e.target.value
        this.setState({persion:newpersion})
    }

    // creating
    addUser=()=>{
   
            axios({
                method:"post",
               url: "http://localhost:3005/forms1/",
               data:this.state.persion,
               headers:{"Content-Type":"application/json"}
            })
            var newCreatePersions=[...this.state.allUsers]
            newCreatePersions.push(this.state.persion)
            this.setState({allUsers:newCreatePersions})
        // }catch(error){
        //     console.error(error.response.data);
        this.clearForm()
        
            
    }

    // clearform
    clearForm=()=>{
        var newClearForm={
            id:"",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
        }
        this.setState({persion:newClearForm})
    }
    // delete function
    deleteUser=(val,id)=>{
        var newNumber=id+1
        axios.delete("http://localhost:3005/forms1/"+newNumber).then((res)=>
            this.componentDidMount()
        )
    }
    ediUser=(val,i)=>{
        this.setState({persion:val,editIndex:i})
    }
    updateUser=()=>{
        var newUpdate=this.state.editIndex+1
        axios({
            method:"put",
            url:"http://localhost:3005/forms1/"+newUpdate,
            data:this.state.persion
        })
        var newAllUpdate=[...this.state.allUsers]
        newAllUpdate[this.state.editIndex]=this.state.persion
        this.setState({allUsers:newAllUpdate,editIndex:null})
        this.clearForm()
    }
    render() {
        return (
            <div>
                 <form>
                 <label> Id : </label>
                <input type="text" name="id" value={this.state.persion.id} onChange={(e) => { this.handleChange(e) }} disabled /><br />
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
                    <th scope="col">ID</th>
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
                    {this.state.allUsers.map((val,i) =>
                        <tr key={i}>
                            <td>{val.id}</td>
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
                                <button className="btn btn-danger" type='button' onClick={() => { this.deleteUser(val,i) }}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            </div>
        );
    }
    async componentDidMount(){
        let newUser=await axios.get("http://localhost:3005/forms1")
        console.log(newUser);
        this.setState({allUsers:newUser.data})
    }
}

export default Form1;
