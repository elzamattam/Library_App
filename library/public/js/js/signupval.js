function valform() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    if (user == "") {
        document.getElementById("Username").innerHTML = "Please fill the Username";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById("Username").innerHTML = "Usename should be greater than 2 and less than 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("Username").innerHTML = "Usename cannot start with a number";
    }
    if (pass == "") {
        document.getElementById("pswd").innerHTML = "Please fill the Password ";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById("pswd").innerHTML = "Password should be greater than 5 and less than 20";
        return false;
    }
    if (conpass == "") {
        document.getElementById("conpas").innerHTML = "Please fill the Confirm Password";
        return false;
    }
    if (pass != conpass) {
        document.getElementById("conpas").innerHTML = "Password and confirm password should not differ";
        return false;
    }
    if (mobile == "") {
        document.getElementById("mob").innerHTML = "Please fill the Mobile Number";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById("mob").innerHTML = "Mobile number cannot be letters ";

        return false;
    }
    if (mobile.length != 10) {
        document.getElementById("mob ").innerHTML = " Mobile number should be 10 digits ";
        return false;
    }
    if (email == "") {
        document.getElementById("eml ").innerHTML = "Please fill the EmailId ";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById("eml").innerHTML = "Please dont put @ at first position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById("eml").innerHTML = "Please fill dot in the correct position";
        return false;
    }
}