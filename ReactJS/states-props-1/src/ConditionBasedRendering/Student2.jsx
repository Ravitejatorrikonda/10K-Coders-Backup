import { Component } from "react";

class Student2 extends Component {
    constructor() {
        super()
        this.state = {
            stu1: "He is a second student",
            persion: {
                fname: "Ravi",
                lname: "teja",
                role: "softwearedeveloper"
            },
            studentDetails: true,
            studentarr: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWCMDcSVIXHAR14YwUNER5kiRdkCMgqE9-A&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpeNu54Jqw6H9IMKfQR2jxKwiHjy8TAYkAg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUHxJ8FK2-psvu2BRnZ1oR-XCTpZmykmdNA&usqp=CAU"]
        }

    }
    render() {
        return <div>
            {/* {this.state.studentarr.map((val,i)=><img src={val} alt="" key={i} style={{width:100,height:100}}/>)} */}
            {this.state.studentDetails ? (this.state.studentarr.map((val, i) => (<img src={val} alt="" key={i} style={{ width: 100, height: 100 }} />))) : (<p>Thare is no image</p>)}
        </div>
    }
}
export default Student2