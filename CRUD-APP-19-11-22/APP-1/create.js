var user= {
    university: "",
    institute: "",
    branch: "",
    degree: "",
    status: "",
    cgpa: "",
    experience: "",
    website: "",
    doj: "",
    subjects: [],
}


var users=JSON.parse(localStorage.getItem("users"))
if(users==null){
    users=[]
}
var users = []
function addUser() {
    for (a in user) {
        if (a !== "status" && a !== "subjects") {
            user[a] = document.getElementById(a).value
        } else if (a == "subjects") {
            var allcheckbox = document.getElementsByName("subject")
            allcheckbox.forEach((element) => {
                if (element.checked) {
                    user.subjects.push(element.value)
                }
            })
        }


        else if (a == "status") {
            var allstatus = document.getElementsByName("status")
            allstatus.forEach((element) => {
                if (element.checked) {
                    user[a] = element.value
                }
            })
        }
    }
    users.push(user)       // user data push in "users"varibule
    displayUsers(users)   // usin this function diclaration displaying data in to table
    console.log(user);


    localStorage.setItem("users", JSON.stringify(users))  //storing data in local storage

    clearForm()  //clearing data function

}
function clearForm() {
    for (a in user) {
        if (a !== "status" && a !== "subjects") {
            document.getElementById(a).value = ""
        } else {
            var allcheckBoxes = document.getElementsByName("subject");
            var allstatus = document.getElementsByName("status")
            allcheckBoxes.forEach((cb) => {
                cb.checked = false
            })
            allstatus.forEach((cs) => {
                cs.checked = false
            })
        }
    }
}