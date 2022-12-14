import { Component } from "react";

class User4 extends Component{
    constructor(){
        super()
        this.state={
        persions:{
            univercity:"",
            institute:"",
            branch:"",
            degree:"",
            persuing1:"",
            avarageCpi:"",
            semister:"",
            experiance:"",
            blog:"",
        },
        allUsers:[],
        editIndex:null,
    }

    }
    handleChange=(e)=>{
        var newpersions={...this.state.persions}
        newpersions[e.target.name]=e.target.value
        this.setState({persions:newpersions})
      
    }
    // handleChange= (e)=> { 
    //     this.setState({ persions: e.currentTarget.value, }); }
    // handleChangeper=(e)=>{
    //     var newpersuing={...this.state.persions.persuing1}
    //     newpersuing[e.target.name]=e.target.value
    //     this.setState({persuing1:newpersuing})
    // }
    addUser=()=>{
        console.log({...this.state})
      var newAllUsers=[...this.state.allUsers]
      newAllUsers.push(this.state.persions)
      this.setState({allUsers:newAllUsers})
      this.clearForm()
    }
    clearForm=()=>{
        var newForm={
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
        this.setState({persions:newForm})
    }
    editUser=(val,i)=>{
        this.setState({persions:val,editIndex:i})
    }
    delUser=(val)=>{
        var deleteUser=this.state.allUsers.filter((myval)=>myval.blog !==val.blog)
        this.setState({allUsers:deleteUser})
    }
    updateUser=()=>{
        var uptodateUser=[...this.state.allUsers]
        uptodateUser[this.state.editIndex]=this.state.persions
        this.setState({allUsers:uptodateUser,editIndex:null})
        this.clearForm()
    }
    render(){
        return <div>
                       <form>
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
                        {/* <input type="radio" name="persuing" value={this.state.persions.persuing} onChange={(e)=>{this.handleChange(e)}}/>
                        <label htmlFor="">Persuing : </label><br/>
                        <input type="radio" name="persuing" value={this.state.persions.persuing} onChange={(e)=>{this.handleChange(e)}}/>
                        <label htmlFor="">Persuing : </label><br/> */}


                          
                       
                        {/* <input type="radio" name="persuing1" value={this.state.persions.persuing1} onChange={(e)=>{this.handleChange(e)}}
                         checked={this.state.persions.persuing1 === this.state.persions.persuing1}/>
                        <label name="persuing" htmlFor="">persuing</label><br/>
                        
                        <input type="radio" name="persuing1" value={this.state.persions.persuing1} onChange={(e)=>{this.handleChange(e)}} 
                        checked={this.state.persions.persuing1 === this.state.persions.persuing1}/>
                        <label htmlFor="">Completed</label><br/> */}
                        {/* <input type="radio" name="persuing1" value={this.state.persuing1} checked={this.state.site === result.persuing1} onChange={this.onSiteChanged} />
                        <input type="radio" name="persuing1" value={this.state.persuing1} checked={this.state.site === result.persuing1} onChange={this.onSiteChanged} /> */}
                        <div onChange={(e)=>{this.handleChange(e)}}>
                            <input type="radio" name="persuing1" value="persuing" />persuing
                            <input type="radio" name="persuing1" value="completed"/>completed
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
    }
}
export default User4;