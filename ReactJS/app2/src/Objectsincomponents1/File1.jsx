import { Component } from "react";


export class Data1 extends Component{
    constructor(){
        super()
        this.state={
             lname:"Wadayar",
             user:{
                Player:"ramcharn",
                player2:"salavudin",
                player3:"DA"
             },
             myarr:[
                     "raina","MSD","143"
             ]
        }
    }
    render(){
        return <div>
        <hr/>
              <ul>
                {this.state.lname}
                </ul>
                <ul>
                    {Object.values(this.state.user).map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>  
                <ul>
                    {this.state.myarr.map((element)=>{
                        return <li>{element}</li>
                    })}
                </ul>
        </div>
    }
}