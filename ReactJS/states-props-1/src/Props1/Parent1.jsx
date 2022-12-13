import { Component } from "react";
import Headercom from "./Header1";

class Classparent extends Component{
    constructor(){
        super()
        this.state={
            msg:"this is a welcome message",
            employee:{
                fname:"Ravi",
                lname:"teja",
                role:"developer",

            }
        }
    }
    render(){
        return( 
        <div>
        {/* <Headercom {...this.state}/> */}
        <Headercom message={this.state.employee}/>
        </div>
        )
    }
}
export default Classparent;