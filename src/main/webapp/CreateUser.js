function createUser() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (input1 !== "" && input2 !== "") {
        let user = new User(input1, input2);
        console.log(user);
        requestData(urlNeeded, "POST", user);
    }
    else {
        console.log("Can't send a blank name!");
    }
    
    document.getElementById("hidingButton").style.display = "block";
    createdText(); 
}

function createdText() {
    document.getElementById("success").innerText = "User successfully created!";
    textTime(3000, "success");
}

