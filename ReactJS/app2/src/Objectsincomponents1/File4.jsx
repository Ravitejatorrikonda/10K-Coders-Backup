import { Component } from "react";

export class Data4 extends Component{
    constructor(){
super()
        this.state={
            data5:"teja",
            data6:{
                fname:"msravid",
                lname:"rainteja",
                sname:"jadduteja"
            },
            data7:["raina33","msd47","jaddu128"]
        }
    }
    render(){
        return <div>
                <ul>
                    {this.state.data5}
                    </ul> 
                    <ul>
                        {Object.values(this.state.data6).map((element)=>{
                            return <li>{element}</li>
                        })}
                        <ul>
                            {this.state.data7.map((element)=>{
                                return <li>{element}</li>
                            })}
                        </ul>
                    </ul>
        </div>
    }
}