const getUserPage = "./userPage.html"
const getLoginPage = "./loginPage.html"
    
let output = window.sessionStorage.getItem("User");
output = JSON.parse(output);

function getUser() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    requestData(urlNeeded, "GET", "").then((x) =>{
        let data = JSON.parse(x.responseText);
        console.log(data);
        for(let ele of data) {
            console.log(ele.firstName);
            console.log(ele.lastName);
            if(ele.firstName === input1 && ele.lastName === input2) {
                console.log(ele.firstName);
                console.log(ele.lastName);
                window.sessionStorage.setItem("User", JSON.stringify(ele));
                window.location.href = getUserPage;
            }
        }
    });
}

function displayUser() {
    document.getElementById("userTable").style.visibility="visible";
    document.getElementById("returningID").innerText = output.id;
    document.getElementById("firstName").innerText = output.firstName;
    document.getElementById("lastName").innerText = output.lastName;
    // window.sessionStorage.removeItem("User");
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

hideData();