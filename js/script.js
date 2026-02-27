function showMessage() {
    alert("Hello! Welcome to my Web Application.");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.innerText = "All fields are required!";
        error.style.color = "red";
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
