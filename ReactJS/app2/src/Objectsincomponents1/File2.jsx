import { Component } from "react";

export class Data2 extends Component{
    constructor(){
        super()
        this.state={
            sname:"karthik",
            data1:{
                fname:"nikhilsai",
                lname:"sathish",
                surname:"saikumar"
            },
            data2:[
                "ravi","7075880446","teja"
            ]
        }
    }
    render(){
        return <div>
                <ul><li>{this.state.sname}</li></ul>
                <ul>
                    <li>
                        {Object.values(this.state.data1).map((element)=>{
                            return <li>{element}</li>
                        })}
                    </li>
                </ul>
                <ul>
                    {this.state.data2.map((element)=>{
                        return <li>{element}</li>
                    })}
                </ul>
        </div>
    }
}