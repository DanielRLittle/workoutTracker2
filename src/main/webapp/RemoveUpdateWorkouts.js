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