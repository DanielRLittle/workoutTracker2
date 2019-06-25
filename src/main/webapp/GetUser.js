const getUserPage = "./userPage.html"
const getLoginPage = "./loginPage.html"


    
let output = window.sessionStorage.getItem("User");
output = JSON.parse(output);

function getUser() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let inputNames = input1 + input2;
    const urlByUser = `http://35.242.137.2:8080/workoutTracker-1.0/api/users/username/${inputNames}`;
    requestData(urlByUser, "GET", "").then((x) =>{
        let data = JSON.parse(x.responseText);
        console.log(data);
        console.log(data.firstName);
        window.sessionStorage.setItem("User", JSON.stringify(data));
        window.location.href = getUserPage;
    });
    setTimeout(() => {
        document.getElementById("failed").innerText = "Incorrect login details, please enter a valid name."
    }, 500);
    
}

function getWorkouts() {
    let userID = output.id;
    const urlWorkouts = `http://35.242.137.2:8080/workoutTracker-1.0/api/workout/${userID}`
    let table = document.getElementById("workoutTable");
    requestData(urlWorkouts, "GET", "").then((x) => {
        let workoutData = JSON.parse(x.responseText);
        console.log(workoutData);
        for (let x of workoutData) {
            console.log(x);
            const myTr = document.createElement("tr");
            const myTh = document.createElement("th");
            let att = document.createAttribute("scope");
            att.value = "row";
            myTh.setAttributeNode(att);
            myTh.innerText = x.id;
            myTr.appendChild(myTh);
            const myTd = document.createElement("td");
            myTd.innertext = x.workoutName;
            myTr.appendChild(myTd);
            const myTd2 = document.createElement("td");
            myTd2.innertext = x.workoutDescription;
            myTr.appendChild(myTd2);
            table.appendChild(myTr);
        }
    });
}

function displayUser() {
    document.getElementById("userTable").style.visibility="visible";
    document.getElementById("returningID").innerText = output.id;
    document.getElementById("firstName").innerText = output.firstName;
    document.getElementById("lastName").innerText = output.lastName;
}

function checkUser() {
    if (!output) {
        window.location.href = getLoginPage;
    }
}

function checkAndDisplay() {
    checkUser();
    displayUser();
}

function hideData() {
    document.getElementById("userTable").style.visibility="hidden";
}

function hideShowUser(idString, userObject) {
    
    hideShow(idString);
}

function hideShowTable(idString) {
    hideShow(idString);
}


function hideShow(idString) {
    let x = document.getElementById(idString);
    if (window.getComputedStyle(x).visibility === "visible") {
        x.style.visibility="hidden";
    }
    else {
        x.style.visibility="visible";
    }
}

function fillUser(userObject) {
    document.getElementById("returningID").innerText = userObject.id;
    document.getElementById("firstName").innerText = userObject.firstName;
    document.getElementById("lastName").innerText = userObject.lastName;
}