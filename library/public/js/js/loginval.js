function logval() {
    var email = document.getElementById("email").value
    var pwd = document.getElementById("password").value
    if (email == null || email == "") {
        alert("Email can't be blank");
        return false;
    } else if (pwd.length < 6) {
        alert(
            "Password must be at least 6 characters long.");
        return false;
    }
}