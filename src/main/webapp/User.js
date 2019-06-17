function requestyToy(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log("got the stuff!");
                    resolve(req);
                }
                else {
                    reject("could not find data!")
                }
            }
        }
        req.open("GET", url);
        req.send();
    });
}

function sendyPloy(data, url) {
    data = JSON.stringify(data);
    console.log(data);
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 201) {
                    console.log("Sent the stuff!");
                    resolve(req);   
                }
                else {
                    reject("Where were you mate?!");
                }
            }
        }
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    });
}

function displayeeMoi(request) {
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
}

function displayConsole() {
    requestyToy("http://localhost:8080/JavaEEServer-1.0/api/accounts/").then((x) => {
    displayeeMoi(x);
});
}

displayConsole();

function transferPageyEnvoy() {
    let input = document.getElementById("inputtyfoi").value;
    if (input !== "") {
        let account = new Account(document.getElementById("inputtyfoi").value);
        console.log(account);
        sendyPloy(account, "http://localhost:8080/JavaEEServer-1.0/api/accounts/");
        document.getElementById("error").innerHTML = "Account added!";
    }
    else {
        console.log("Can't send a blank name!");
        document.getElementById("error").innerHTML = "Error! Please enter a name.";
    }
}

function newPage() {
    
    let input = document.getElementById("inputtyfoi").value;
    requestyToy("http://localhost:8080/JavaEEServer-1.0/api/accounts/").then((x) => {
        let data = JSON.parse(x.responseText);
        for(let x of data) {
            if(x.name === input) {
                window.sessionStorage.setItem("User", JSON.stringify(x));
                window.location.href = 'file:///C:/Users/Admin/Desktop/frontEndPractice/newAccountPage.html';
            }
        }
    });
}
