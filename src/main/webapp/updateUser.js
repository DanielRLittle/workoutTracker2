let output = window.sessionStorage.getItem("User");

function getUser() {
    output = JSON.parse(output);
}

function updateUser() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    console.log(output);
    const urlById = `http://35.242.137.2:8080/workoutTracker-1.0/api/users/${output.id}`;
    if (input1 !== "" && input2 !== "") {
        output.firstName = input1;
        output.lastName = input2;
        requestData(urlById, "PUT", output);
        redirectUser();
    }
    else {
        console.log("Can't change to a blank name!");
        userRemain();
    }
    
}

getUser();