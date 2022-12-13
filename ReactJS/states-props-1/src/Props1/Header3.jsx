import { Component } from "react";

class Header3 extends Component{
    constructor(props){
        super()
        // console.log(props);

    }
    render(){
        const {handleMessage,message} =this.props
        return (
            <div>
                <button onClick={handleMessage}>change message</button>
                <h4>this is a hrader message</h4>
                {message}
            </div>
        )
    }
}
export default Header3;