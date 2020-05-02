function validateForm() {

    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;

    if (name == "" || email == "" || phone == "") {
        alert("Please enter valid information.");
        return false;
    }

    alert("Thank you!");
    return false;
}