import { Component } from "react";

class Employee extends Component {
    constructor() {
        super()
        this.state = {
            EmployeeDetails: {
                fname: "Ravi",
                lname: "teja",
                email: "Nikhilgmail.com"
            },
            newEmploye:false,
        }
    }
    showEmployeeDatails = () => {
        console.log("Employee Details");
    //   let details2={
    //         fname: "nikhil",
    //         lname: "sai",
    //         email: "nikhilsai@gmail.com",
    //     }
    let details2={...this.state.EmployeeDetails,email:"Raviteja@gmail.com"}
        this.setState({newEmploye:true,EmployeeDetails:details2})
    }



    // showEmployeeDatails(){
    //     console.log("showEmployeeDatails")
    //     this.setState({newEmploye:true})
    // }
    



    render() {
        return <div>
            <button onClick={this.showEmployeeDatails}>Employee Details</button>
            {/* {this.state.newEmploye && <p>{this.state.EmployeeDetails.fame}</p>} */}
    
            {this.state.newEmploye ? <ul>{Object.values(this.state.EmployeeDetails).map((element,i)=>{
                return <li key={i}>{element}</li>
            })}</ul> :(<p>this is employe details</p>)}
        </div>
    }
}
export default Employee;