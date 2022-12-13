import { getDefaultNormalizer } from "@testing-library/react";
import { Component } from "react";

class Employee2 extends Component{
    constructor(){
        super()
        this.state={
            allemployers:{
                lname:"Nikhil",
                snmae:"sai",
                email:"Nikhilsai@gmail.com",
                role:"developer"
            },
            employeeData:false
        }
    }
    allemployers =()=>{
        console.log("this is employees data");
        let crtingEmployeeDetails={...this.state.allemployers,email:"nikhilsai34@gmail.com"}
        this.setState({employeeData:true,allemployers:crtingEmployeeDetails})
    }
    render(){
        return <div>
            <button onClick={this.allemployers}>All Details</button>
            {this.state.employeeData ? <ul>{Object.values(this.state.allemployers).map((val,i)=><li key={i}>{val}</li>)}</ul> :(<p>image connot desplyed because condition is faulse</p>)}

        </div>
    }
}
export default Employee2