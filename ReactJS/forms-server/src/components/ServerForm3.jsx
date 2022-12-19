import React, { Component } from 'react';
import axios from 'axios';

class ServerForm3 extends Component {
    constructor(){
        super()
        this.state={
            allUsers:[],
            persions:{
                id:"",
                univercity:"",
                institute:"",
                branch:"",
                degree:"",
                persuing1:"",
                avarageCpi:"",
                semister:"",
                experiance:"",
                blog:""
            },
            editIndex:null
        }
    }
    handleChange=(e)=>{
        var newpersions={...this.state.persions}
        newpersions[e.target.name]=e.target.value
        this.setState({persions:newpersions})
    }
    addUser=()=>{
        axios({
            method:"post",
            url:"http://localhost:3005/Form3/",
            data:this.state.persions,
            headers: {"Content-Type": "application/json" }
        })
        var newallPersions=[...this.state.allUsers]
        newallPersions.push(this.state.persions)
        this.setState({allUsers:newallPersions})
        this.clearForm()
    }
    clearForm=()=>{
        var allForms={
            id:"",
            univercity:"",
            institute:"",
            branch:"",
            degree:"",
            persuing1:"",
            avarageCpi:"",
            semister:"",
            experiance:"",
            blog:"",
        }
        this.setState({persions:allForms})
    }
    delUser=(usr,i)=>{
        var newDel=i+1
        console.log(newDel);
        axios.delete("http://localhost:3005/Form3/"+newDel).then((res)=>{
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
            url:"http://localhost:3005/Form3/"+newupdate,
            data:this.state.persions
        })
        var newallUpdate=[...this.state.allUsers]
        newallUpdate[this.state.editIndex]=this.state.persions
        this.setState({allUsers:newallUpdate,editIndex:null})
        this.clearForm()
    }
    render() {
        return (
            <div>
                <form>
                <label htmlFor="">ID : </label>
                        <input type="text" name="id" value={this.state.persions.id} onChange={(e)=>{this.handleChange(e)}} disabled/><br/>
                        <label htmlFor="">Univercity : </label>
                        <input type="text" name="univercity" value={this.state.persions.univercity} onChange={(e)=>{this.handleChange(e)}}/><br/>
                        <label htmlFor="">Institute : </label>
                        <input type="text" name="institute" value={this.state.persions.institute} onChange={(e)=>{this.handleChange(e)}}/><br/>
                        <label htmlFor="">Branch : </label>
                        <select name="branch" value={this.state.persions.branch} onChange={(e)=>{this.handleChange(e)}}>
                        
                            <option>Select</option>
                            <option>Cse</option>
                            <option>Ece</option>
                            <option>EEE</option>
                            <option>Mechanical</option>
                            <option>IT</option>
                        </select><br/>
                        <label htmlFor="">Degree : </label>
                        <select name="degree" value={this.state.persions.degree} onChange={(e)=>{this.handleChange(e)}}>
                            <option>select</option>
                            <option>B.sc</option>
                            <option>B.com</option>
                            <option>Bzc</option>
                        </select><br/>
                       
                        <div>
                            <input type="radio" name="persuing1" value="persuing" checked={this.state.persions.persuing1==="persuing"} onChange={(e)=>{this.handleChange(e)}}/>persuing
                            <input type="radio" name="persuing1" value="completed" checked={this.state.persions.persuing1==="completed"}  onChange={(e)=>{this.handleChange(e)}}/>completed
                        </div>

                        <label htmlFor="">avarage CPI : </label>
                        <input type="number" name="avarageCpi" value={this.state.persions.avarageCpi} onChange={(e)=>{this.handleChange(e)}}/>upto

                        
                        <input type="number" name="semister" value={this.state.persions.semister} onChange={(e)=>{this.handleChange(e)}}/>
                        <label htmlFor="">: Th Semister </label><br/>

                        <label htmlFor="">Experiance : </label>
                        <input type="number" name="experiance" value={this.state.persions.experiance} onChange={(e)=>{this.handleChange(e)}}/>years<br/>
                        <label htmlFor="">Your Website or Blog : </label>

                        <input type="text" name="blog" value={this.state.persions.blog} onChange={(e)=>{this.handleChange(e)}}/><br/>
                        {this.state.editIndex !==null ? <button type="button" className="btn btn-info" onClick={this.updateUser}>UpdateUser</button>: 
                        <button type="button" onClick={this.addUser}>add USer</button>}

                        {/* <button type="button" onClick={this.addUser}>add USer</button> */}
                       </form>
                       <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Univercity</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>status</th>
                            <th>AvarageCPI </th>
                            <th>ThSemister </th>
                            <th>Experiance</th>
                            <th>YourWebsiteorBlog</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.allUsers.map((val,i)=>
                            <tr key={i}>
                                <th>{val.id}</th>
                                <td>{val.univercity}</td>
                                <td>{val.institute}</td>
                                <td>{val.branch}</td>
                                <td>{val.degree}</td>
                                <td>{val.persuing1}</td>
                                <td>{val.avarageCpi}</td>
                                <td>{val.semister}</td>
                                <td>{val.experiance}</td>
                                <td>{val.blog}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={()=>{this.editUser(val,i)}}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>{this.delUser(val,i)}}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                       </table>
            </div>
        );
    }
    async componentDidMount(){
        let newUSer=await axios.get("http://localhost:3005/Form3")
        console.log(newUSer);
        this.setState({allUsers:newUSer.data})
    }
}

export default ServerForm3;
