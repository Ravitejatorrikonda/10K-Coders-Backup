import { Component } from "react";

class Headercom extends Component {
    constructor(props) {
        super()
        console.log(props);
    }
    render() {
        return <div  style={{background:"grey",color:'white',padding:10,fontWeight:"bold"}}>
            <h5>this is header message</h5>

            {this.props.msg}
        </div>
    }
}
export default Headercom;