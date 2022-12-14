import { Component } from "react";

class User extends Component{
    constructor(){
        super()
        this.state={
             fname:"",
             lname:"",
             email:"",
        
                persionfname:"msd",
                 persionlname:"Rain",
                 sname:"Jaduu"
             
        }
    }
    handleChange(e){
        var newObject={...this.state}
        newObject[e.target.name]=e.target.value
        this.setState(newObject)
    }
    addUser=()=>{
        console.log(this.state)
    }
    render(){
        return <div>
            <form>
            <label htmlFor="">First Name : </label>
            <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <label htmlFor="">LastName : </label>
            <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}}/><br/>
            <label htmlFor="">Email : </label>
            <input type="email" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/><br/>
        
            <input type="checkbox" name="persionfname" value={this.state.persionfname} onChange={(e)=>{this.handleChange(e)}}/>
            <label htmlFor="">Msd</label><br/>
            <input type="checkbox" name="persionlname" value={this.state.persionlname} onChange={(e)=>{this.handleChange(e)}}/>
            <label htmlFor="">Raina</label><br/>
            <input type="checkbox" name="sname" value={this.state.sname} onChange={(e)=>{this.handleChange(e)}}/>
            <label htmlFor="">Jaddu</label><br/>
            
            <button type="button" onClick={this.addUser}>Add User</button>
            </form>
        </div>
    }
}
export default User