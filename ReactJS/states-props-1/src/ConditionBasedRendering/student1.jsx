import { Component } from "react";

class Student extends Component {
    constructor() {
        super()
        this.state = {
            Welcome: "welcome to react js project in states props",
            studentDetails: {
                fname: "Ravi",
                lname: "teja",
                email: "ravi@gmail.com"
            },
            subjects: ["HTML", "Css", "Javascript", "ReactJS"],
            showImages: true,
            image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU", "https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8-320-80.jpg", "https://www.shutterstock.com/image-vector/javascript-programming-language-script-code-260nw-1062509657.jpg", "https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png"]
        }
    }
    render() {
        return <div>
            <h4>{this.state.Welcome}</h4>
            <ul>
                {Object.values(this.state.studentDetails).map((val, i) =>
                    <li key={i}>{val}</li>
                )}
            </ul>
            <ul>
                {this.state.subjects.map((val,i) =>
                    <li key={i}>{val}</li>
                )}
            </ul>
            <div>


                {/* condition based rendaring */}

                {/* {this.state.image.map((val,i)=> <img src={val} alt="" style={{width:100,height:100}} key={i} />)} */}
                {/* {this.state.showImages ? (this.state.image.map((imgval, i) => (<img src={imgval} alt="" key={i} style={{ width: 100, height: 100 }} />)) ): (<p>thare is no image</p>)} */}
                 {this.state.showImages ? (this.state.image.map((val,i)=> ( <img src={val} alt="" key={i} style={{width:100,height:100}} />))) : (<p>thare is no image</p>)}


                

                 {/* {this.state.showImages && (this.state.image.map((val,i)=> (<img src={val} alt="" key={i} style={{width:100,height:100,}} />)))} */}
            </div>
        </div>
    }
}
export default Student