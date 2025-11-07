function validateForm(){

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("phone").innerHTML = "";
    document.getElementById("message").innerHTML = "";

    if(name === ""){
        document.getElementById("nameerror").innerHTML="Name is required";
        isValid = false;
    }

    if(name !== ""){
        document.getElementById("nameerror").innerHTML="";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === "" || !emailPattern.test(email)){
        document.getElementById("emailerror").innerHTML="Enter a valid E-mail";
        isValid = false;
    }

    if(emailPattern.test(email)){
        document.getElementById("emailerror").innerHTML="";
    }

    let phonePattern = /^[0-9]{10}$/;
    if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneerror").innerHTML = "Enter a 10-digit phone number";
        isValid = false;
    }

    if (phonePattern.test(phone)) {
        document.getElementById("phoneerror").innerHTML = "";
    }

    if (message === "") {
        document.getElementById("messageerror").innerHTML = "Message cannot be empty";
        isValid = false;
    }

    if(message !== ""){
         document.getElementById("messageerror").innerHTML = "";
    }

    return isValid;
}