const urlNeeded = "http://35.242.137.2:8080/workoutTracker-1.0/api/users/";

function requestData(url, method, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if ((req.status >= 200) && (req.status <= 299)) {
                    console.log("received data");
                    resolve(req);
                }
                else {
                    reject("data not found");
                }
            }
        }
        req.open(method, url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(body));
    });
}

function displayData(request) {
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
}

function displayUsers() {
    requestData(urlNeeded, "GET", "");
}

function postData() {
    
}

displayUsers();