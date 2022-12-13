import { Component } from "react";

class Header2 extends Component{
    constructor(props){
        super()
        console.log(props);
    }
    render(){
        return ( <div>
            <button onClick={this.props.handlemessage}>change data</button>
          <p>  {this.props.message}</p>
        </div>
        )
    }
}
export default Header2;