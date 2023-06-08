function validateForm() {
    var loginInput = document.getElementById("login");
    var passwordInput = document.getElementById("password");
    var login = loginInput.value.trim();
    var password = passwordInput.value.trim();

    if (login == "")
    {
        alert("Wprowadz swoj login!");
        loginInput.focus();
        return false;
    }

    if (password == "")
    {
        alert("Wprowadz swoje haslo!");
        passwordInput.focus();
        return false;
    }

    alert("Formularz zostal prawidlowo wypelniony!");
    return true;
}