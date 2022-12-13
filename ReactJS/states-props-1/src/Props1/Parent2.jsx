import { Component } from "react";
import Header2 from "./Header2";

class Parent2 extends Component{
    constructor(){
        super()
        this.state={
            msg:"Welcome message in parent file",
            persion:"this is second welcome for parent note",
            User2:{
                fname:"Ravi",
                lname:"Teja",
                role:"developer"
            }
        }
    }
    changemessage=()=>{
        this.setState({msg:"this is a changing message"})
    }
    render(){
        return (<div>
         {/* <Header2{...this.state}/> */}
         <Header2 message={this.state.msg} handlemessage={this.changemessage}/>
        </div>
        )
    }
}
export default Parent2;