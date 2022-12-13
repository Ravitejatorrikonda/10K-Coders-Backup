import { Component } from "react";
import Header3 from "./Header3";

class Parent3 extends Component{
    constructor(){
        super()
        this.state={
            welcomeMessage:"this is a welcome message for Parent 3",
            employeeData:{
                fname:"Ravi",
                lname:"Teja",
                role:"developer",
            }
        }
    }
    changeMessage=()=>{
        this.setState({welcomeMessage:"this is a change message of parent3"})
    }
    render(){
        const {welcomeMessage} =this.state
        return(
            <div>
              {/* <Header3 {...this.state}/> */}
              <Header3 message={welcomeMessage} handleMessage={this.changeMessage}/>
            </div>
        )
    }
}
export default Parent3