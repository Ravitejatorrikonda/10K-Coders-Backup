import { Component } from "react";

export class Data3 extends Component{
    constructor(){
super()
        this.state={
            data2:"teja",
            data3:{
                fname:"msd",
                lname:"rain",
                sname:"jaddu"
            },
            data4:["raina3","msd7","jaddu8"]
        }
    }
    render(){
        return <div>
                <ul>
                    {this.state.data2}
                    </ul> 
                    <ul>
                        {Object.values(this.state.data3).map((element)=>{
                            return <li>{element}</li>
                        })}
                        <ul>
                            {this.state.data4.map((element)=>{
                                return <li>{element}</li>
                            })}
                        </ul>
                    </ul>
        </div>
    }
}