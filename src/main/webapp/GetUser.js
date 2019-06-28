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
    const urlWorkouts = `http://35.242.137.2:8080/workoutTracker-1.0/api/workout/${userID}`;
    let table = document.getElementById("workoutTable");
    let counter = 0;
    requestData(urlWorkouts, "GET", "").then((x) => {
        let workoutData = JSON.parse(x.responseText);
        console.log(workoutData);
        for (let x of workoutData) {
            console.log(x);
            const myTr = document.createElement("tr");
            myTr.setAttribute("id", counter);
            for (let y in x) {
                const td = document.createElement("td");
                td.innerText = x[y];
                myTr.appendChild(td);
                table.appendChild(myTr);
            }
            const myTd = document.createElement("td");
            const wEdit = document.createElement("button");
            wEdit.innerText = "Edit";
            wEdit.setAttribute("type", "button")
            wEdit.setAttribute("onclick", `inputUpdateWorkout(${counter})`)
            wEdit.setAttribute("id", `${counter}`+5000);
            myTd.appendChild(wEdit);
            const wDel = document.createElement("button");
            wDel.innerText = "Remove";
            wDel.setAttribute("type", "button")
            wDel.setAttribute("onclick", `removeWorkout(${counter})`)
            wDel.setAttribute("id", counter+10000);
            myTd.appendChild(wDel);
            myTr.appendChild(myTd);
            counter ++;
        }
    });
}

function inputWorkout() {
    const myTr = document.createElement("tr");
    const table = document.getElementById("workoutTable");
    const myTd = document.createElement("td");
    myTr.appendChild(myTd);
    table.appendChild(myTr);
    const myTd2 = document.createElement("td");
    const inp1 = document.createElement("input");
    inp1.setAttribute("id", "inp1");
    myTd2.appendChild(inp1);
    myTr.appendChild(myTd2);
    table.appendChild(myTr);
    const myTd3 = document.createElement("td");
    const inp2 = document.createElement("input");
    inp2.setAttribute("id", "inp2");
    myTd3.appendChild(inp2);
    myTr.appendChild(myTd3);
    table.appendChild(myTr);
    const myTd4 = document.createElement("td");
    const but = document.createElement("button");
    but.innerText = "done";
    but.setAttribute("type", "button");
    but.setAttribute("onclick", "addWorkout()");
    myTd4.appendChild(but);
    myTr.appendChild(myTd4);
    table.appendChild(myTr);
}

function addWorkout() {
    let userID = output.id;
    let input1 = document.getElementById("inp1").value;
    let input2 = document.getElementById("inp2").value;
    const urlAddWorkout = `http://35.242.137.2:8080/workoutTracker-1.0/api/workout/${userID}`;
    if (input1 !== "" && input2 !== "") {
        let w = new Workout(input1, input2);
        console.log(w);
        requestData(urlAddWorkout, "PUT", w);
    }
    else {
        console.log("Can't send blank fields!");
    }
    window.location.reload(true);
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