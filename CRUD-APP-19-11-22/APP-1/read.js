function displayUsers(users) {
    document.querySelector("tbody").innerHTML ="";
    users.forEach((myUser,i) => { 
        var myTr = document.createElement("tr");
        for (a in myUser) {
            var myTd = document.createElement("td")
            myTd.innerHTML = myUser[a]
            myTr.appendChild(myTd)
        }
        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("onclick", "editUser(" + i + ")")
        editBtn.innerHTML = "EDIT"
        editTd.appendChild(editBtn)
        myTr.appendChild(editTd)


        var delTd = document.createElement("td")
        var delBtn = document.createElement("button")
        delBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        delBtn.innerHTML = "DELETE"
        delTd.appendChild(delBtn)
        myTr.appendChild(delTd)


        document.querySelector("tbody").appendChild(myTr)
    });


}
 displayUsers(users)