function mainMenu() {
    window.location.href = './frontpage.html';
}

function userPage() {
    window.location.href = './userPage.html';
}

function updateUserPage() {
    window.location.href = './updateUser.html';
}

function loginPage() {
    window.location.href = './loginPage.html';
}

function createUserPage() {
    window.location.href = './createUser.html';
}

function loginFromCreate() {
    document.getElementById("hidingButton").style.display = "none";
    window.location.href = './loginPage.html';
}

function redirectUser() {
    document.getElementById("redirectAfterUpdate").innerHTML = "A fresh login is required for your username to take effect, redirecting...";
    timeout(2500);
}

function userRemain() {
    document.getElementById("remain").innerHTML = "Cannot enter a blank name!";
}

function afterDeleteUser() {
    document.getElementById("redirectAfterUpdate").innerHTML = "Account has been deleted, redirecting...";
    timeout(2000);
}


function timeout(int) {
    setTimeout(() => {
        mainMenu();
    }, int);
}

function textTime(int, id) {
    setTimeout(() => {
        document.getElementById(id).innerText = "";
    }, int);
}