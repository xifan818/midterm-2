$(document).ready(function () {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('content');


    signUpButton.addEventListener('click', () => {
        container.classList.add("right-roll-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-roll-active");
    });


    document.querySelector("email").innerHTML = "電郵";

    document.querySelector("pass").innerHTML = "密碼";

    document.querySelector("name").innerHTML = "名字";

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

});
