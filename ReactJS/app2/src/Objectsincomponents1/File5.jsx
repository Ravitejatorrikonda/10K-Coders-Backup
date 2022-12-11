import { Component } from "react";

export class Data5 extends Component{
    constructor(){
        super()
        this.state={
            data8:"karthik",
            data9:{
                fname:"nikhilsai",
                lname:"sathish",
                surname:"saikumar"
            },
            data10:[
                "ravi","7075880446","teja"
            ]
        }
    }
    render(){
        return <div>
                <ul><li>{this.state.data8}</li></ul>
                <ul>
                    <li>
                        {Object.values(this.state.data9).map((element)=>{
                            return <li>{element}</li>
                        })}
                    </li>
                </ul>
                <ul>
                    {this.state.data10.map((element)=>{
                        return <li>{element}</li>
                    })}
                </ul>
        </div>
    }
}