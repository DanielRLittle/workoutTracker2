function removeWorkout(id) {
    console.log(id);
    let tr = document.getElementById(id);
    console.log(tr);
    let td = tr.children[0].textContent;
    console.log(td);
    const wDelURL = `http://35.242.137.2:8080/workoutTracker-1.0/api/workouts/${td}`
    requestData(wDelURL, "DELETE", "");
    window.location.reload(true);
}

function inputUpdateWorkout(id) {
    let tr = document.getElementById(id);
    let inp1 = document.createElement("input");
    let inp2 = document.createElement("input");
    let td1 = tr.children[1];
    td1.innerText = "";
    td2.innerText = "";
    td1.appendChild(inp1);
    let td2 = tr.children[2];
    td2.appendChild(inp2);
    let editRemove = document.getElementById(5000+id);
    editRemove.parentNode.removeChild("button");
    let removeRemove = document.getElementById(10000+id);
    removeRemove.parentNode.removeChild("button");
}